const Koa = require('koa'); // 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示
const router = require('koa-router')(); // 注意require('koa-router')返回的是函数:
const views = require('koa-views');
const path = require('path');
const render = require('koa-ejs');
const static = require('koa-static');
const bodyParser = require('koa-bodyparser');
const app = new Koa();

// bodyParser //解析request的body
app.use(bodyParser());

// routes
const viewRouter = require('./router/view');
// apiRouter
const apiRouter = require('./router/api');

//static -> dist
app.use(static(
  path.join(__dirname,'../dist')
));

// 配置模板文件目录和后缀名
// app.use(views(__dirname + '../dist', {
//   extension: 'html'
// }))
render(app, {
  root: path.join(__dirname, '../dist'),
  layout: '',
  viewExt: 'html',
  cache: false,
  debug: false
});

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

// add router middleware:
app.use(viewRouter.routes(), viewRouter.allowedMethods());
app.use(apiRouter.routes(), apiRouter.allowedMethods());

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
