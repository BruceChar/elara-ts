import * as Redis from 'ioredis'
import {logger, accessLogger} from './log'


const redis = new Redis()

let keys = redis.keys('*')
logger.info('keys: ', keys)
accessLogger.info