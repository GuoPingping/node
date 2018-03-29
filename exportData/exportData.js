// 导出数据到excel表格
var ejsExcel = require('ejsexcel'); //引入ejsExcel库<br>
var fs = require("fs"); //加载fs库<br>
var path = require("path")

router.get('/exportData', async(ctx) => {
    var model_name = "test.xlsx"; //模板
    var pathTemplate = path.join(path.dirname(__dirname).replace('exportData', '') + '\\template\\' + model_name);
    var downPath = isExists(pathTemplate, true);
    var exlBuf = fs.readFileSync(downPath);
    var data = [
        [
            { "num": 1, "name": 小石, "age": 10 },
            { "num": 2, "name": 小李, "age": 11 },
            { "num": 3, "name": 小郭, "age": 12 },
            { "num": 4, "name": 小孙, "age": 13 }
        ]
    ]


    var exlBuf2 = await ejsExcel.renderExcel(exlBuf, data);
    data = new Buffer(exlBuf2, 'binary');
    ctx.res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    var fileName = "test.xlsx"; //导出到excel
    ctx.res.setHeader("Content-Disposition", "attachment; filename=" + fileName);
    ctx.body = data;
    return await data;
})

//判断该系统是否存在该路径
//windows系统和ios系统的路径获取不同
function isExists(pathTemplate, option) {
    if (!fs.exists(pathTemplate) && option) {
        //获取模板
        var model_name = "test.xlsx";
        //获取模板的路径
        pathTemplate = path.join(path.dirname(__dirname).replace('exportData', '') + '/template/' + model_name);
        return pathTemplate;
    }
}