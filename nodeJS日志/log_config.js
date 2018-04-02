var path = require('path');

//日志根目录
var baseLogPath = path.resolve(__dirname, '../logs');
//错误日志目录
var errorPath = '/error';
//错误日志文件名
var errorFileName = "error.log";
//错误日志输出完整路径
var errorLogPath = baseLogPath + errorPath + "/" + errorFileName;
//响应日志目录
var responsePath = "/response"
    //响应日志文件名
var responseFileName = "response.log";
//响应日志输出完整路径
var responseLogPath = baseLogPath + responsePath + "/" + responseFileName;

module.exports = {
    appenders: {
        errorLogger: { //错误日志
            "type": "file", //日志类型
            "filename": errorLogPath, //日志输出位置
            "maxLogSize": 1024 * 520,
            "backups": 8
        },
        resLogger: { //响应日志
            "type": "file",
            "filename": responseLogPath,
            "maxLogSize": 1024 * 1024 * 2,
            "backups": 8
        }
    },
    categories: {
        default: { appenders: ['errorLogger'], level: 'error' },
        errorLogger: { appenders: ['errorLogger'], level: 'error' },
        resLogger: { appenders: ['resLogger'], level: 'info' }
    }
}