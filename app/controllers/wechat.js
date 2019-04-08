const axios = require('axios');
const model = require('../../wechat/mongodb/model');

// 添加定时任务
module.exports.addSchedule = async function (ctx, next) {
  let resData = '';
  let body = ctx.request.body;
  console.log('接收参数', body);
  resData = await model.insert(body);
  ctx.body = resData;
}

// 更新定时任务
module.exports.updateSchedule = async function (ctx, next) {
  const condition = { _id: ctx.request.body.id }
  let res = await model.update(condition)
  ctx.response.status = 200;
  ctx.body = { code: 200, msg: "ok", data: res }
}
