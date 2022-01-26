package service

import (
	"context"
	"errors"
	"fmt"
	"pandax/base/global"

	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	"k8s.io/client-go/kubernetes"
	"pandax/apps/devops/entity/k8s"
	k8scommon "pandax/apps/devops/services/k8s/common"
	"pandax/apps/devops/services/k8s/dataselect"
	"strings"
)

// Service is a representation of a service.
type Service struct {
	ObjectMeta k8s.ObjectMeta `json:"objectMeta"`
	TypeMeta   k8s.TypeMeta   `json:"typeMeta"`

	// InternalEndpoint of all Kubernetes services that have the same label selector as connected Replication
	// Controller. Endpoint is DNS name merged with ports.
	InternalEndpoint k8scommon.Endpoint `json:"internalEndpoint"`

	// ExternalEndpoints of all Kubernetes services that have the same label selector as connected Replication
	// Controller. Endpoint is external IP address name merged with ports.
	ExternalEndpoints []k8scommon.Endpoint `json:"externalEndpoints"`

	// Label selector of the service.
	Selector map[string]string `json:"selector"`

	// Type determines how the service will be exposed.  Valid options: ClusterIP, NodePort, LoadBalancer, ExternalName
	Type v1.ServiceType `json:"type"`

	// ClusterIP is usually assigned by the master. Valid values are None, empty string (""), or
	// a valid IP address. None can be specified for headless services when proxying is not required
	ClusterIP string `json:"clusterIP"`
}

// ServiceList contains a list of services in the cluster.
type ServiceList struct {
	ListMeta k8s.ListMeta `json:"listMeta"`

	// Unordered list of services.
	Services []Service `json:"services"`
}

// GetServiceList returns a list of all services in the cluster.
func GetServiceList(client *kubernetes.Clientset, nsQuery *k8scommon.NamespaceQuery, dsQuery *dataselect.DataSelectQuery) (*ServiceList, error) {
	global.Log.Info("Getting list of all services in the cluster")

	channels := &k8scommon.ResourceChannels{
		ServiceList: k8scommon.GetServiceListChannel(client, nsQuery, 1),
	}

	return GetServiceListFromChannels(channels, dsQuery)
}

// GetServiceListFromChannels returns a list of all services in the cluster.
func GetServiceListFromChannels(channels *k8scommon.ResourceChannels, dsQuery *dataselect.DataSelectQuery) (*ServiceList, error) {
	services := <-channels.ServiceList.List
	err := <-channels.ServiceList.Error
	if err != nil {
		return nil, err
	}

	return CreateServiceList(services.Items, dsQuery), nil
}

func ToService(service *v1.Service) Service {
	return Service{
		ObjectMeta:        k8s.NewObjectMeta(service.ObjectMeta),
		TypeMeta:          k8s.NewTypeMeta(k8s.ResourceKindService),
		InternalEndpoint:  k8scommon.GetInternalEndpoint(service.Name, service.Namespace, service.Spec.Ports),
		ExternalEndpoints: k8scommon.GetExternalEndpoints(service),
		Selector:          service.Spec.Selector,
		ClusterIP:         service.Spec.ClusterIP,
		Type:              service.Spec.Type,
	}
}

// CreateServiceList returns paginated service list based on given service array and pagination query.
func CreateServiceList(services []v1.Service, dsQuery *dataselect.DataSelectQuery) *ServiceList {
	serviceList := &ServiceList{
		Services: make([]Service, 0),
		ListMeta: k8s.ListMeta{TotalItems: len(services)},
	}

	serviceCells, filteredTotal := dataselect.GenericDataSelectWithFilter(toCells(services), dsQuery)
	services = fromCells(serviceCells)
	serviceList.ListMeta = k8s.ListMeta{TotalItems: filteredTotal}

	for _, service := range services {
		serviceList.Services = append(serviceList.Services, ToService(&service))
	}

	return serviceList
}

func DeleteService(client *kubernetes.Clientset, ns string, serviceName string) error {
	global.Log.Info(fmt.Sprintf("请求删除Service: %v, namespace: %v", serviceName, ns))
	return client.CoreV1().Services(ns).Delete(
		context.TODO(),
		serviceName,
		metav1.DeleteOptions{},
	)
}

func DeleteCollectionService(client *kubernetes.Clientset, serviceList []k8s.ServiceData) (err error) {
	global.Log.Info("批量删除service开始")
	for _, v := range serviceList {
		global.Log.Info(fmt.Sprintf("delete service：%v, ns: %v", v.Name, v.Namespace))
		err := client.CoreV1().Services(v.Namespace).Delete(
			context.TODO(),
			v.Name,
			metav1.DeleteOptions{},
		)
		if err != nil {
			global.Log.Error(err.Error())
			return err
		}
	}
	global.Log.Info("删除service已完成")
	return nil
}

func GetToService(client *kubernetes.Clientset, namespace string, name string) (*ServiceList, error) {
	serviceList := &ServiceList{
		Services: make([]Service, 0),
	}
	svcList, err := client.CoreV1().Services(namespace).List(context.TODO(), metav1.ListOptions{})
	global.Log.Info("开始获取svc")
	if err != nil {
		return nil, err
	}
	for _, svc := range svcList.Items {
		if strings.Contains(svc.Name, name) {
			serviceList.Services = append(serviceList.Services, ToService(&svc))
			serviceList.ListMeta = k8s.ListMeta{
				TotalItems: len(serviceList.Services),
			}
			return serviceList, nil
		}
	}
	global.Log.Warn(fmt.Sprintf("没有找到所关联的SVC：namespace: %s, name: %s", namespace, name))
	return nil, errors.New("没有找到所关联的SVC")
}