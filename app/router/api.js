const apiRouter = require('koa-router')();
const apiHandlers = require('../controllers/api');

// getList
apiRouter.get('/api/getList', apiHandlers.getList);
// log
apiRouter.get('/api/getOauthAccesstoken', apiHandlers.getOauthAccesstoken);
apiRouter.get('/api/getReslog', apiHandlers.getReslog);
apiRouter.get('/api/getErrorlog', apiHandlers.getErrorlog);
// login
apiRouter.get('/api/login', apiHandlers.login);

module.exports = apiRouter;
