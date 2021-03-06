/**
 * @module LogstashTransport~UDPInput
 */
const dgram = require("dgram")
const os = require("os")

module.exports=
/**
 * @class UDPInput
 * @desc The class that does transmission of logs using the UDP input
 * @example node examples/basic-udp.js
 */
class UDPInput  {
    /**
     * 
     * @param {Object} options - The options object returned from the LogstashTransport class
     */
    constructor(options){
        this.options=options
        this.connect()

    }
    /**
     * @desc The function that creates the UDP socket
     */
    connect()   {
        this.client = dgram.createSocket("udp4")
        this.client.unref()
    }
    /**
     * 
     * @param {String} message - The log object that needs to be sent to Logstash
     * @param {Object} callback - The callback function to be called after the write is finished
     * @desc The function that sends the actual message to UDP
     */
    send(message,callback)  {
        let buffer = Buffer.from(message.toString());
        this.client.send(buffer,0,buffer.length,this.options.port,this.options.host,callback)
    }
}