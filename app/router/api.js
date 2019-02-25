const apiRouter = require('koa-router')();
const apiHandlers = require('../controllers/api');

// getList
apiRouter.get('/api/getList', apiHandlers.getList);
// log
apiRouter.get('/api/getOauthAccesstoken', apiHandlers.getOauthAccesstoken);
apiRouter.get('/api/getReslog', apiHandlers.getReslog);
apiRouter.get('/api/getErrorlog', apiHandlers.getErrorlog);
// login
apiRouter.post('/api/login', apiHandlers.login);
apiRouter.post('/api/loginOut', apiHandlers.loginOut);
apiRouter.get('/api/userInfo', apiHandlers.userInfo);

module.exports = apiRouter;
