/**
 * @module LogstashTransport
 */
const winston = require("winston")
const Transport = winston.transport;
/**
 * @class LogstashTransport
 * @extends Transport
 */
module.exports = 
class LogstashTransport extends Transport  {
    /**
     * 
     * @param {*} options 
     */
    constructor(options){
        super(options);
        this.name='LogstashTransport'
        this.input=options.input

    }
    log(info,callback)  {
        setImmediate(()=>{
            this.emit('logged',info);
        })
        callback()
    }
}