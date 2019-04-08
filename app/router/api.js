const apiRouter = require('koa-router')();
const apiHandlers = require('../controllers/api');
const authHandlers = require('../controllers/auth');
const wechatHandlers = require('../controllers/wechat');

// wechat
apiRouter.post('/api/addSchedule', wechatHandlers.addSchedule);
apiRouter.post('/api/updateSchedule', wechatHandlers.updateSchedule);

// getList
apiRouter.get('/api/getList', apiHandlers.getList);
// log
apiRouter.get('/api/getOauthAccesstoken', apiHandlers.getOauthAccesstoken);
apiRouter.get('/api/getReslog', apiHandlers.getReslog);
apiRouter.get('/api/getErrorlog', apiHandlers.getErrorlog);
// login
apiRouter.post('/api/login', authHandlers.login);
apiRouter.post('/api/loginOut', authHandlers.loginOut);
apiRouter.get('/api/userInfo', authHandlers.userInfo);

module.exports = apiRouter;
