//testLog4.js
var log4js = require('log4js');
//log级别为8级 ALL<TRACE<DEBUG<INFO<WARN<ERROR<FATAL<MARK<OFF。默认级别是 OFF
// "type": "dateFile"   // 可以设置成 console、file、dateFile三种
// "filename": "./logs/access-", // 设置log输出的文件路劲和文件名
// "pattern": ".yyyy-MM-dd.log",
// "alwaysIncludePattern": true, // 和上面同时使用 设置每天生成log名
// "encoding": "utf-8", // 设置文件编码格式
// "maxLogSize ": 31457280 // 设置文件大小
// "level": "debug", // 设置log输出的最低级别
// "maxLevel": "error" // 设置log输出的最高级别

log4js.configure({
  appenders: {
    "rule-console": {"type": "console"},
    "rule-error": {
      type: 'dateFile',
      //文件名为= filename + pattern, 设置为alwaysIncludePattern：true
      filename: 'config/rule-error.log',
      "encoding":"utf-8",
      "maxLogSize": 104800
    },
    "rule-res": {
      type: 'dateFile',
      filename: 'config/rule-res.log',
      "encoding":"utf-8",
      "maxLogSize": 104800
    }
  },
  categories: {
    "default": {"appenders": ["rule-console"], "level": "all"},
    "rule-error": {"appenders": ['rule-error'],"level": "error"},
    "rule-res": {"appenders": ['rule-res'], "level": "info"}
  },
  replaceConsole: false
});

var errorLogger = log4js.getLogger('rule-error');
var resLogger = log4js.getLogger('rule-res');
var consoleLogger = log4js.getLogger();

errorLogger.error('errorLogger');
resLogger.error('resLogger');
consoleLogger.error('consoleLogger');

// logger.trace('this is trace');
// logger.debug('this is debug');
// logger.info('this is info');
// logger.warn('this is warn');
// logger.error('this is error');
// logger.fatal('this is fatal');
