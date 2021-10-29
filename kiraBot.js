const env = require("./.env")
const Telegraf = require("telegraf") //npm i --save telegraf@3.17.3

const bot = new Telegraf(env.TOKEN)

bot.start(content =>{
    const msg = content.update.message;
    console.log(msg)
    content.reply(`Seja Bem vindo ${msg.from.first_name} !!!`)

})
bot.on("text",content=>{
    
    const msgUsuario = content.update.message.text
    console.log(msgUsuario)
})

bot.startPolling()