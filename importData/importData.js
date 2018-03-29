// 从excel表格导入数据
var ejsExcel = require('ejsexcel'); //引入ejsExcel库
var fs = require("fs"); //加载fs库
var path = require("path")

router.post('/importData', async(ctx) => {
    var tmpath = __dirname + '/template/test1.xlsx';
    var exlBuf = fs.readFileSync(tmpath);
    var exlJson = await ejsExcel.getExcelArr(exlBuf);
    let workBook = exlJson;
    let workSheets = workBook[0];

    workSheets.forEach((item, index) => {
        console.log((index + 1) + " row:" + item.join('    '));
        ctx.body = jsonUtil.returnSuccessJson("导入成功！");
    }).catch(error => {
        ctx.body = jsonUtil.returnFailureJson("导入失败！");
    })
})