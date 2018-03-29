### nodeJS excel 导入导出 
### 插件ejsExcel


npm install ejsexcel

###导出数据到excel表格
1.引用
    var ejsExcel = require('ejsexcel');//引入ejsExcel库
    var fs = require("fs");//加载fs库
    var path = require("path")
2.首先，创建一个excel模板（template/test.xlsx)；
3.获取下载导出的模板路径；
4.判断路径是否存在；
5.读取该路径的文件；
6.定义一个数组data用来存储导出的数据；
    data=[
        [{"num":1,"name":小石,"age":10},
        {"num":2,"name":小李,"age":11},
        {"num":3,"name":小郭,"age":12},
        {"num":4,"name":小孙,"age":13}
    ]
7.渲染data数据
    var exlBuf2 = await ejsExcel.renderExcel(exlBuf, data);
    data = new Buffer(exlBuf2, 'binary');
    ctx.res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    var fileName = "test.xlsx";//导出到excel
    ctx.res.setHeader("Content-Disposition", "attachment; filename=" +fileName);
    ctx.body = data;
    return await data;
