const {Esana} = require("esana-node-api")

async function esana_run(){

await Esana.verify('Enter Your Passcode') 
const esana_data = await Esana.fetch_news_data()
console.log(esana_data)

}
esana_run()
