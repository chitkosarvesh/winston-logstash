/**
 * @module LogstashTransport
 */
const winston = require("winston")

/**
 * @class LogstashTransport
 * @extends Transport
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
        super(options);
        this.name='LogstashTransport'
        this.input=options.input
        this.host = options.host
        this.port = options.port
        if(this.input && this.host && this.port){

        }
        else{
            throw new Error("Error creating the Logstash Object, one or more parameter missing.");
        }
    }
    /**
     * @function log
     * @param {*} info - The log object that needs to be sent to Logstash
     * @param {*} callback - Callback function to call, once processing the log message is processed
     */
    log(info,callback)  {
        setImmediate(()=>{
            this.emit('logged',info)
        })
        callback()
    }
}