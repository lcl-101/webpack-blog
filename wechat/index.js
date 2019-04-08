const { Wechaty } = require('wechaty');
const Qrterminal = require('qrcode-terminal')
const untils = require('./util/util');
const { request } = require('./config/superagent')
const schedule = require('./config/schedule')
// const host = 'http://127.0.0.1:3000'
const host = 'https://lcl101.cn/'


const bot = new Wechaty({ name: 'WechatEveryDay' });

// 登录事件
onLogin = async(user) => {
  console.log(`贴心助理${user}登录了`)
}

// 二维码生成
onScan = (qrcode, status) => {
    Qrterminal.generate(qrcode)
    const qrImgUrl = ['https://api.qrserver.com/v1/create-qr-code/?data=', encodeURIComponent(qrcode)].join('')
    console.log(qrImgUrl)
}

// 消息监听
onMessage = async(msg) => {
  const contact = msg.from()
  const content = msg.text()
  const room = msg.room()
  if (msg.self()) return;
  if (room) {
    const roomName = await room.topic()
    console.log(`群名: ${roomName} 发消息人: ${contact.name()} 内容: ${content}`)
  } else {
    console.log(`发消息人: ${contact.name()} 消息内容: ${content}`)

    let keywordArray = content.replace(/\s+/g, ' ').split(" ") // 把多个空格替换成一个空格，并使用空格作为标记，拆分关键词
    console.log("分词后效果", keywordArray)

    if (keywordArray[0] === "提醒") {
      let scheduleObj = untils.contentDistinguish(contact, keywordArray)
      addSchedule(scheduleObj)
      contact.say('小助手已经把你的提醒牢记在小本本上了')
    }else if (content && content.indexOf('你好') > -1) {
      contact.say('你好，很高兴成为你的小秘书，来试试我的新功能吧！回复案例：“提醒 我 18:30 下班回家”，创建你的专属提醒，记得关键词之间使用空格分隔开')
    }
  }
}

// 添加定时提醒
addSchedule = async(obj) => {
  console.log(obj);
  request(host + '/api/addSchedule', 'POST', '', obj).then(async(res) => {
    res = JSON.parse(res.text);
    let nickName = res.subscribe
    let time = res.time
    let Rule1 = res.isLoop ? time : new Date(time)
    let content = res.content
    let contact = await bot.Contact.find({ name: nickName })
    console.log(res._id);
    schedule.setSchedule(Rule1, async() => {
      console.log('你的专属提醒开启啦！')
      await contact.say(content)
      if (!res.isLoop) {
        request(host + '/api/updateSchedule', 'POST', '', { id: res._id }).then((result) => {
            console.log('更新定时任务成功')
        }).catch(err => {
            console.log('更新错误', err)
        })
      }
    })
  })
}

bot.on('scan',onScan);
bot.on('login', onLogin)
bot.on('message', onMessage);
bot.start();
