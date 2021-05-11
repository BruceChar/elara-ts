import Koa from 'koa'
import ChainConf from './src/config'
const app = new Koa()


app.listen("7001", () => {
    console.log("Chain server listen on port: 7001")
    let conf = new ChainConf('polkadot.io', '9999', '99', {authot: ['insert', 'rotate']})
    console.log(conf)
})