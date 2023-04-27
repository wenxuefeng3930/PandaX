package tool

import (
	"fmt"
	"github.com/xuri/excelize/v2"
)

// 读取数据表
func ReadExcel(filename string) ([]string, []map[string]interface{}) {
	ret := make([]map[string]interface{}, 0)
	f, err := excelize.OpenFile(filename)
	if err != nil {
		fmt.Println("读取excel文件出错", err.Error())
		return nil, ret
	}
	sheets := f.GetSheetMap()
	sheet1 := sheets[1]
	fmt.Println("第一个工作表", sheet1)
	rows, err := f.GetRows(sheet1)
	cols := make([]string, 0)
	isHead := true
	for _, row := range rows {
		if isHead { //取得第一行的所有数据---execel表头
			if len(row) == 0 {
				continue
			}
			for _, colCell := range row {
				cols = append(cols, colCell)
			}
			isHead = false
			fmt.Println("列信息", cols)
		} else {
			theRow := map[string]interface{}{}
			for j, colCell := range row {
				k := cols[j]
				theRow[k] = colCell
			}
			ret = append(ret, theRow)
		}
	}
	return cols, ret
}
