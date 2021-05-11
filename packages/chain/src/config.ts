type JO = {}

class ChainConf {
    url: string
    rpcport: string
    wsport: string
    apipolicy: JO

    constructor(url: string, rpcport: string = '9944', wsport: string = '9933', apipolicy: JO) {
        this.url = url
        this.rpcport = rpcport
        this.wsport = wsport
        this.apipolicy = apipolicy
    }
}

export = ChainConf