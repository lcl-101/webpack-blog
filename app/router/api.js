const apiRouter = require('koa-router')();
const apiHandlers = require('../controllers/api');

apiRouter.get('/api/getList', apiHandlers.getList);
apiRouter.get('/api/getOauthAccesstoken', apiHandlers.getOauthAccesstoken);
apiRouter.get('/api/getReslog', apiHandlers.getReslog);
apiRouter.get('/api/getErrorlog', apiHandlers.getErrorlog);

module.exports = apiRouter;
