const log4js = require('log4js');
const log_conf = require('../../config/log4_config');

log4js.configure(log_conf);

var errorLogger = log4js.getLogger('rule-error');
var resLogger = log4js.getLogger('rule-res');
var consoleLogger = log4js.getLogger();

let logger = {};

//test
// errorLogger.error('errorLogger');
// resLogger.error('resLogger');
// consoleLogger.error('consoleLogger');


var formatInfo = function (info) {
    var logText = new String();
    logText += "\n" + "#:::::::" + "\n" + JSON.stringify(info) + "\n";
    logText += ':::::::#';
    return logText;
}

//格式化响应日志
var formatRes = function (ctx, resTime) {
    var logText = new String();

    //添加请求日志
    logText += formatReqLog(ctx.request, resTime);

    //响应状态码
    logText += "response status: " + ctx.status;

    //响应内容
    // logText += "response body: " + "\n" + JSON.stringify(ctx.body) + "|";

    return logText;
}

//格式化错误日志
var formatError = function (ctx, err, resTime) {
    var logText = new String();

    //添加请求日志
    logText += formatReqLog(ctx.request, resTime);

    //错误名称
    logText += "err name: " + err.name + " | ";

    //错误信息
    logText += "err message: " + err.message + " | ";

    //错误详情
    logText += "err stack: " + err.stack;

    return logText;
};

//getIp
var getIp = function(req) {
    var ip = req.headers['x-real-ip'] ||
        req.headers['x-forwarded-for'] ||
        req.socket.remoteAddress || '';
    if(ip.split(',').length>0){
        ip = ip.split(',')[0];
    }
    return ip;
};

//格式化请求日志
var formatReqLog = function (req, resTime) {

    var logText = new String();

    //访问方法
    logText += "request method: " + req.method + " | ";

    //请求原始地址
    logText += "request originalUrl:  " + req.originalUrl + " | ";

    //客户端ip
    logText += "request client ip:  " + getIp(req) + " | ";

    //userAgent
    logText += "user-agent:  " + JSON.stringify(req.header['user-agent']) + " | ";

    //请求参数
    if (req.method === 'GET') {
        logText += "request query:  " + JSON.stringify(req.query) + " | ";
    } else {
        logText += "request body: " + "\n" + JSON.stringify(req.body) + " | ";
    }
    //服务器响应时间
    logText += "response time: " + resTime + " | ";

    return logText;
}

//封装错误日志
logger.logError = (ctx, error, resTime) => {
  if(ctx && error){
    errorLogger.error(formatError(ctx, error, resTime))
  }
}

//封装响应日志
logger.logResponse = (ctx, resTime) => {
  if(ctx){
    resLogger.info(formatRes(ctx, resTime));
  }
}

//console info
logger.logInfo = (info) => {
  if (info){
    consoleLogger.info(formatInfo(info));
  }
}

module.exports = logger;
