import Koa from 'koa'
import ratelimit from 'koa-ratelimit'
import router from './src/router/router'
import {useLog} from '../lib/log'

const app = new Koa()
const rateDB = new Map()


// have to inject before router
// TODO: config the router and blakc wihte list
const log = useLog(app, __dirname)
app.use(ratelimit({
    driver: 'memory',
    db: rateDB,
    duration: 10000,
    errorMessage: "Jack slow fuck!",
    id: (ctx) => ctx.ip,
    headers: {
        remaining: 'Rate-Limit-Remainning',
        reset: 'Rate-Limit-Reset',
        total: 'Rate-Limit-Total'
    },
    max:10,
    disableHeader: false,
    // whitelist: (ctx: Koa.Context):boolean => {
    //     // if true, skip ratelimit check
    //     console.log("ctx: ", ctx)
    //     // if (ctx.request)
    //     return true
    // },
    // blacklist: (ctx) =>{
    //     // same above
    //     return true
    // }
}))

app.use(router)



const logger = log.getLogger('app')
app.listen("7000", () => {
    logger.error("Listennig on port:7000")

})