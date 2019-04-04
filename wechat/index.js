const { Wechaty } = require('wechaty');
const Qrterminal = require('qrcode-terminal')


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
  const text = msg.text()
  const room = msg.room()
  if (room) {
    const topic = await room.topic()
    console.log(`Room: ${topic} Contact: ${contact.name()} Text: ${text}`)
  } else {
    console.log(`Contact: ${contact.name()} Text: ${text}`)
  }
}

bot.on('scan',onScan);
bot.on('login', onLogin)
bot.on('message', onMessage);
bot.start();
