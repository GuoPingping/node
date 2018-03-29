### nodeJS excel 导入导出 
#### 插件: ejsExcel
#### 安装：npm install ejsexcel

#### 导出数据到excel表格
* 1.引用
>>  var ejsExcel = require('ejsexcel');//引入ejsExcel库<br>
>>  var fs = require("fs");//加载fs库<br>
>>  var path = require("path")<br>
* 2.首先，创建一个excel模板（template/test.xlsx)；
>> var model_name = "进出记录.xlsx"; //模板
* 3.获取下载导出的模板路径；
>> var pathTemplate = path.join(path.dirname(__dirname).replace('controllers', '') + '\\template\\' + model_name);
* 4.判断路径是否存在；(主要针对Windows系统和苹果系统路径不一致所做出的的判断方法)
>> var downPath = isExists(pathTemplate, true);
* 5.读取该路径的文件；
>> var exlBuf = fs.readFileSync(downPath);
* 6.定义一个数组data用来存储导出的数据；
>>    data=[<br>
>>>>        [{"num":1,"name":小石,"age":10},
>>>>        {"num":2,"name":小李,"age":11},
>>>>        {"num":3,"name":小郭,"age":12},
>>>>        {"num":4,"name":小孙,"age":13}]
>>    ]
* 7.渲染data数据
>>    var exlBuf2 = await ejsExcel.renderExcel(exlBuf, data);<br>
>>    data = new Buffer(exlBuf2, 'binary');<br>
>>    ctx.res.setHeader('Content-Type', 'application/vnd.openxmlformats');<br>
>>    var fileName = "test.xlsx";//导出到excel<br>
>>    ctx.res.setHeader("Content-Disposition", "attachment; filename=" +fileName);<br>
>>    ctx.body = data;<br>
>>    return await data;<br>
