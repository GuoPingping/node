var postParse = require('postParse');
var serviceControllers = function() {};
var table_name = 'test';
var config = require('basic.config')
var mongodb = require('mongo_controllers.js'); //引入操作mongodb数据库封装DB类
var common = new mongodb(config.mongodb_visitor, "tenant");

//获取卡片总共数量
serviceControllers.prototype.getTotal = async function(data) {
    const params = {
        Timestamp: '1521078200336',
        inputText: '',
        cardType: '全部',
        isUse: '全部',
        cardStatus: '全部',
        pageSize: '10',
        currentPage: '1',
        prop: 'is_use',
        order: 'descending'
    }
    return await common.count(table_name, params)
}

module.exports = new serviceControllers();