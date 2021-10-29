
class Teste{
    constructor(){
        this.value = 10
    }
    teste(){
        return 
        
    }
    tes(){
        te()
    }
    
}
const p = require("puppeteer");

(async(()=> {
    const browser = p.launch({headless:false});
    const pg =  await browser.newPage();
    await pg.goto("https://google.com.br")
}))()
