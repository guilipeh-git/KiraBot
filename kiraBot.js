const env = require("./.env")
const Telegraf = require("telegraf") //npm i --save telegraf@3.17.3

const bot = new Telegraf(env.TOKEN)

bot.start(content =>{
    const msg = content.update.message;
    console.log(msg)
    content.reply(`Olá ${msg.from.first_name}, Seja Bem vindo !!!`)

})
bot.on("text",content=>{
    
    const msgUsuario = content.update.message.text
    console.log(msgUsuario)
    if(msgUsuario.indexOf("/signo")  != -1){
        content.reply("msgUsuario "+ "teste")
    }
})

bot.startPolling()