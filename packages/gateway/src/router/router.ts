import {Context as KCtx} from 'koa'
import Router from 'koa-router'

const router = new Router()

router["get"]("/", (ctx: KCtx) => {
    console.log("Hello", ctx.response)
    ctx.response.body = {
        "name": "Bruce"
    }
})

router.get("/hello", (ctx: KCtx) => {
    console.log("world")
    ctx.response.body = "Hello world"
})


export = router.routes()