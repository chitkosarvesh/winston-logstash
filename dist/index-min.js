const winston=require("winston"),UDPInput=require("./UDPInput.class-min"),TCPInput=require("./TCPInput.class-min"),WebSocketInput=require("./WebSocketInput.class-min"),HTTPInput=require("./HTTPInput.class-min");module.exports=class extends winston.Transport{constructor(t){if(super(t),this.name="LogstashTransport",this.input=t.input,this.host=t.host,this.port=t.port,!(this.input&&this.host&&this.port))throw new Error("Error creating the Logstash Object, one or more parameter missing.");if("udp"==this.input)this.input=new UDPInput(t);else if("tcp"==this.input)this.input=new TCPInput(t);else if("websocket"==this.input)this.input=new WebSocketInput(t);else{if("http"!=this.input)throw new Error('Unspupported Input "'+this.input+'". It should be either udp, tcp, websocket or http');this.input=new HTTPInput(t)}}log(t,s){setImmediate(()=>{this.input.send(t),this.emit("logged",t)}),s()}};