import * as kafka from 'kafka-node'
import { KafkaClientOptions } from 'kafka-node'

const Producer = kafka.Producer
const KeyMsg = kafka.KeyedMessage
const client = new kafka.KafkaClient({})

export type AnyCb = (err: any, data: any) => any

export function sendMsg(payloads: kafka.ProduceRequest[], cb: AnyCb) {
    
}

// client
export function KafkaClient(params: KafkaClientOptions) {
    return new kafka.KafkaClient(params)
}

// producer factory

// consumer factory
