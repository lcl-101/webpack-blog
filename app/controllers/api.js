const axios = require('axios');
const redis = require('redis');
const schedule = require('node-schedule');
//链接redis服务器;
const client = redis.createClient('6379', '127.0.0.1');
const service = 'https://api.github.com';
const fs = require('fs');

//test redis
client.set('hello', {a:1, b:2}) // 注意，value会被转为字符串,所以存的时候要先把value 转为json字符串
client.get('hello', function(err, value){
  console.log('test:'+value)
})

// client.del('getList')

//获取redis中getList
const getList = async () => {
  return await new Promise((resolve) => {
    client.get('getList', function(err, value){
      resolve(value);
    })
  })
}
// getIssues
function getIssues(){
  return axios.get(service + '/repos/lcl-101/webpack-blog/issues?client_id=149613f6b828472ab126&client_secret=c003cfeeafa97ca0f4c756aab3c2051447ddaab7');
}
//定时任务
function scheduleCronstyle(){
  schedule.scheduleJob('30 1 * * * *', function(){
    getIssues().then(function(data){
      if(data.status == 200){
        client.set('getList', JSON.stringify(data.data));
      }
    });
  });
}
scheduleCronstyle();
// getList
module.exports.getList = async function (ctx, next) {
  let resData = '';
  const getIssuesData = getIssues();
  try {
    let value = await getList();
    if(!value){
      let res = await getIssuesData;
      if(res.status == 200 && res.data){
        client.set('getList', JSON.stringify(res.data));
        resData = res.data;
      }else {
        resData.message = '数据请求失败';
      }
    }else {
      resData = value;
    }
  } catch(e) {
    resData.message = '服务连接异常';
    console.log(e);
  }
  ctx.body = resData;
}
// getOauthAccesstoken
module.exports.getOauthAccesstoken = async function (ctx, next) {
  let resData = '';
  try {
    const params = ctx.query;
    //获取access_token
    var res = await axios.post('https://github.com/login/oauth/access_token',params);
    resData = res.data.split('&')[0].split('=')[1];
  } catch(e) {
    resData.message = '数据请求失败';
  }
  ctx.body = resData;
}

// getReslog
module.exports.getReslog = async function (ctx, next) {
  let resData = {
    status: 1,
    data: null,
    message: null,
    errType: null
  };
  try {
    var res = fs.readFileSync('/var/www/log4/blog/jsonlog/rule-res-json.log', 'utf8');
    resData.data = eval ("(" + res + ")");
  } catch(e) {
    resData.message = '数据请求失败';
    resData.errType = 1001;
  }
  ctx.body = resData;
}
