package nodes

import (
	"github.com/sirupsen/logrus"
	"pandax/pkg/rule_engine/message"
)

const InputNodeName = "InputNode"

type inputNode struct {
	bareNode
}

type inputNodeFactory struct{}

func (f inputNodeFactory) Name() string     { return "InputNode" }
func (f inputNodeFactory) Category() string { return NODE_CATEGORY_OTHERS }

func (f inputNodeFactory) Create(id string, meta Metadata) (Node, error) {
	labels := []string{}
	node := &inputNode{
		bareNode: newBareNode(InputNodeName, id, meta, labels),
	}
	return node, nil
}

func (n *inputNode) Handle(msg message.Message) error {
	logrus.Infof("%s handle message '%s'", n.Name(), msg.GetType())

	nodes := n.GetLinkedNodes()
	for _, node := range nodes {
		return node.Handle(msg)
	}
	return nil
}
