/**
 * @module LogstashTransport~TCPInput
 */
const net = require("net")
module.exports=
/**
 * @class TCPInput
 * @desc The class that does transmission of logs using the TCP input
 * @example node examples/basic-tcp.js
 */
class TCPInput  {
    /**
     * 
     * @param {Object} options - The options object returned from the LogstashTransport class
     */
    constructor(options){
        this.options=options
        this.connect()
    }
    connect()   {
        this.client = net.createConnection({port:this.options.port,host:this.options.host},()=>{
            this.client.unref()  
        })
    }
    send(message,callback)  {
        this.client.write(JSON.stringify(message))
    }
}