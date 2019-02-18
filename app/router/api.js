const apiRouter = require('koa-router')();
const apiHandlers = require('../controllers/api');

apiRouter.get('/api/getList', apiHandlers.getList);
apiRouter.get('/api/getOauthAccesstoken', apiHandlers.getOauthAccesstoken);

module.exports = apiRouter;
