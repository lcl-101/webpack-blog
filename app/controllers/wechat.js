const axios = require('axios');
const model = require('../../wechat/mongodb/model');

// 添加定时任务
module.exports.addSchedule = async function (ctx, next) {
  let resData = {
    status: 1,
    data: '',
    message: null,
    errType: null
  };
  let body = ctx.request.body;
  console.log('接收参数', body);
  resData.data = await model.insert(body);
  ctx.body = resData;
}

// 更新定时任务
module.exports.updateSchedule = async function (ctx, next) {
  let resData = {
    status: 1,
    data: '',
    message: null,
    errType: null
  };
  const condition = { _id: ctx.request.body.id }
  resData.data = await model.update(condition)
  ctx.body = resData
}

//获取定时任务列表
module.exports.getScheduleList = async function (ctx, next) {
  let resData = {
    status: 1,
    data: '',
    message: null,
    errType: null
  };
  const condition = { hasExpired: false };
  resData.data = await model.find(condition);
  console.log(resData);
  ctx.body = resData;
}
