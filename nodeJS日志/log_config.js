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