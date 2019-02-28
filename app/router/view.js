const viewRouter = require('koa-router')();
const viewHandlers = require('../controllers/view');

viewRouter.get('/', viewHandlers.Home);
viewRouter.get('/Home', viewHandlers.Home);
viewRouter.get('/Posts', viewHandlers.Posts);
viewRouter.get('/Archive', viewHandlers.Archive);
viewRouter.get('/Label', viewHandlers.Label);
// test
viewRouter.get('/test', viewHandlers.Test);
// admin
viewRouter.get('/admin', viewHandlers.Admin);
// 详情
viewRouter.get('/:id', viewHandlers.Detail);


module.exports = viewRouter;
