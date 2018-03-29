### nodeJS excel 导入导出 
#### 插件: ejsExcel
#### 安装：npm install ejsexcel

#### 导出数据到excel表格
* 1.引用
>>  var ejsExcel = require('ejsexcel');//引入ejsExcel库<br>
>>    var fs = require("fs");//加载fs库<br>
>>    var path = require("path")<br>
* 2.首先，创建一个excel模板（template/test.xlsx)；
* 3.获取下载导出的模板路径；
* 4.判断路径是否存在；
* 5.读取该路径的文件；
* 6.定义一个数组data用来存储导出的数据；
>>    data=[<br>
>>>>        [{"num":1,"name":小石,"age":10},<br>
>>>>        {"num":2,"name":小李,"age":11},<br>
>>>>        {"num":3,"name":小郭,"age":12},<br>
>>>>        {"num":4,"name":小孙,"age":13}<br>
>>    ]
* 7.渲染data数据
>>    var exlBuf2 = await ejsExcel.renderExcel(exlBuf, data);<br>
>>    data = new Buffer(exlBuf2, 'binary');<br>
>>    ctx.res.setHeader('Content-Type', 'application/vnd.openxmlformats');<br>
>>    var fileName = "test.xlsx";//导出到excel<br>
>>    ctx.res.setHeader("Content-Disposition", "attachment; filename=" +fileName);<br>
>>    ctx.body = data;<br>
>>    return await data;<br>
