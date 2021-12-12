package api

import (
	"pandax/base/ctx"
	"pandax/base/ginx"
	"pandax/base/utils"
	"pandax/system/entity"
	"pandax/system/services"
)

type LogLoginApi struct {
	LogLoginApp services.LogLoginModel
}

// @Summary 登录日志列表
// @Description 获取JSON
// @Tags 登录日志
// @Param status query string false "status"
// @Param dictCode query string false "username"
// @Param pageSize query int false "页条数"
// @Param pageNum query int false "页码"
// @Success 200 {string} string "{"code": 200, "data": [...]}"
// @Router /system/log/logLoginList [get]
// @Security
func (l LogLoginApi) GetLoginLogList(rc *ctx.ReqCtx) {
	pageNum := ginx.QueryInt(rc.GinCtx, "pageNum", 1)
	pageSize := ginx.QueryInt(rc.GinCtx, "pageSize", 10)
	status := rc.GinCtx.Query("status")
	username := rc.GinCtx.Query("username")

	list, total := l.LogLoginApp.FindListPage(pageNum, pageSize, entity.LogLogin{Status: status, Username: username})
	rc.ResData = map[string]interface{}{
		"data":     list,
		"total":    total,
		"pageNum":  pageNum,
		"pageSize": pageSize,
	}
}

// @Summary 通过编码获取登录日志
// @Description 获取JSON
// @Tags 登录日志
// @Param infoId path int true "infoId"
// @Success 200 {string} string "{"code": 200, "data": [...]}"
// @Router /system/log/logLogin/{infoId} [get]
// @Security
func (l LogLoginApi) GetLoginLog(rc *ctx.ReqCtx) {
	infoId := ginx.PathParamInt(rc.GinCtx, rc.GinCtx.Param("infoId"))
	rc.ResData = l.LogLoginApp.FindOne(int64(infoId))
}

// @Summary 添加登录日志
// @Description 获取JSON
// @Tags 登录日志
// @Accept  application/json
// @Product application/json
// @Param data body entity.LogLogin true "data"
// @Success 200 {string} string	"{"code": 200, "message": "添加成功"}"
// @Success 200 {string} string	"{"code": 400, "message": "添加失败"}"
// @Router /system/log/logLogin [post]
// @Security X-TOKEN
func (l LogLoginApi) InsertLoginLog(rc *ctx.ReqCtx) {
	var log entity.LogLogin
	ginx.BindJsonAndValid(rc.GinCtx, &log)
	l.LogLoginApp.Insert(log)
}

// @Summary 修改登录日志
// @Description 获取JSON
// @Tags 登录日志
// @Accept  application/json
// @Product application/json
// @Param data body entity.LogLogin true "body"
// @Success 200 {string} string	"{"code": 200, "message": "添加成功"}"
// @Success 200 {string} string	"{"code": 400, "message": "添加失败"}"
// @Router /system/log/logLogin [put]
// @Security X-TOKEN
func (l LogLoginApi) UpdateLoginLog(rc *ctx.ReqCtx) {
	var log entity.LogLogin
	ginx.BindJsonAndValid(rc.GinCtx, &log)
	l.LogLoginApp.Update(log)
}

// @Summary 批量删除登录日志
// @Description 删除数据
// @Tags 登录日志
// @Param infoId path string true "以逗号（,）分割的infoId"
// @Success 200 {string} string	"{"code": 200, "message": "删除成功"}"
// @Success 200 {string} string	"{"code": 400, "message": "删除失败"}"
// @Router /system/log/logLogin/{infoId} [delete]
func (l LogLoginApi) DeleteLoginLog(rc *ctx.ReqCtx) {
	infoIds := rc.GinCtx.Param("infoId")
	group := utils.IdsStrToIdsIntGroup(infoIds)
	l.LogLoginApp.Delete(group)
}
