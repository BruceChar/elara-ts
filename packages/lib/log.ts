import * as path from 'path'
import * as Logger from 'koa-log4'

export const useLog = (app: any, dir: string): any => {
    Logger.configure({
        appenders: {
            access: {
                type: 'dateFile',
                pattern: '-yyyy-MM-dd.log',
                maxLogSize: 10,
                filename: path.join(dir, 'logs/', 'access.log')
            },
            app: {
                type: 'file',
                pattern: '-yyyy-MM-dd.log',
                filename: path.join(dir, 'logs/', 'app.log'),
                maxLogSize: 10
            },
            out: {
                type: 'console'
            }
        },
        categories: {
            default: { appenders: ['out'], level: 'debug' },
            access: { appenders: ['access'], level: 'info' },
            app: { appenders: ['app'], level: 'info' },
        },
        // pm2: process.env.NODE_ENV !== 'dev' ? true : false
    })
    app.use(Logger.koaLogger(Logger.getLogger('access')))
    return Logger
}