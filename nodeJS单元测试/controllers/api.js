var router = require('koa-router')()
var config = require('basic.config')
var pathPic = require('path')
var parse = require('co-busboy')
var stringUtil = require('stringUtil');
const jwt = require('jsonwebtoken')
    //请求方式
var axios = require('axios');
//post请求处理参数
var querystring = require('querystring');
var jsonUtil = require('jsonUtil');
var logUtil = require('logUtil');
var basic_config = require('basic.config');

//yml改为json新的需求修改(axios)
var system_service = require(stringUtil.loadFile(require("path").resolve(__dirname)));
const axios_vuePath = stringUtil.getVuePath(system_service, require("path").basename(__filename));
for (const service_path of axios_vuePath.vuePath) {
    router.all(service_path.vuePath, stringUtil.loadRoutes(system_service, axios_vuePath.serviceBasePath, service_path));
}



//查询
router.get('/searchData', async(ctx) => {
    var cardData = await axios.setAxiosGetPromise(system_service.dns + '/service/tenant/cardManagement/searchData', ctx.query)
    if (cardData.code === 0) {
        var cardDataRes = cardData.result;
        ctx.body = jsonUtil.returnSuccessJson(cardDataRes);
    } else {
        ctx.body = jsonUtil.returnSuccessJson('');
    }
})

module.exports = router;