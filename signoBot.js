// site => https://diariodonordeste.verdesmares.com.br/entretenimento/zoeira/previsao-do-signo-de-peixes-para-hoje-29-de-outubro-1.3153643 

// titulo => document.querySelector(".titulo h2").innerText

// texto do signo => document.querySelector(".texto p").innerText
const puppeteer = require("puppeteer");
module.exports = signo = (async()=>{
    let resultado = []
    const browser = await puppeteer.launch({headless:false});
    const pg = await browser.newPage();
    await pg.goto("https://www.otempo.com.br/diversao/horoscopo/leao")


    this.resultado[0] = (await pg.evaluate(async()=>{
        document.querySelector(".texto p").innerText
    }))
    console.log(this.resultado)
})

signo()