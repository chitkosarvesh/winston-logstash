/**
 * @module LogstashTransport
 * @author Sarvesh Chitko (chitkosarvesh@gmail.com)
 */
const winston = require("winston")
const UDPInput = require("./UDPInput.class-min")
const TCPInput = require("./TCPInput.class-min")
const WebSocketInput = require("./WebSocketInput.class-min")
const HTTPInput = require("./HTTPInput.class-min")
/**
 * @class LogstashTransport
 * @extends Transport
 * @desc The main class that adds the Logstash capabilities to Winston
 */
module.exports = 
class LogstashTransport extends winston.Transport  {
    /**
     * 
     * @param {Object} options - The Configuration object
     * @param {String} options.name - The name of the transport
     * @param {String} options.input - The input that you want to use
     * @param {String} options.host - The Logstash server host
     * @param {String} options.port - The port of the Logstash pipeline you've configured
     */
    constructor(options){
        super(options)
        this.name='LogstashTransport'
        this.input=options.input
        this.host = options.host
        this.port = options.port
        if(this.input && this.host && this.port){
            if(this.input=="udp"){
                this.input = new UDPInput(options)
            }
            else if(this.input=="tcp"){
                this.input = new TCPInput(options)
            }
            else if(this.input=="websocket"){
                this.input = new WebSocketInput(options)
            }
            else if(this.input=="http"){
                this.input = new HTTPInput(options)
            }
            else {
                throw new Error("Unspupported Input \""+this.input+"\". It should be either udp, tcp, websocket or http");
            }
        }
        else{
            throw new Error("Error creating the Logstash Object, one or more parameter missing.")
        }
    }
    /**
     * @function log
     * @param {Object} info - The log object that needs to be sent to Logstash
     * @param {Function} callback - Callback function to call, once processing the log message is processed
     */
    log(info,callback)  {
        setImmediate(()=>{
            this.input.send(info)
            this.emit('logged',info)
        })
        callback()
    }
}