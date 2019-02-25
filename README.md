## Modules

<dl>
<dt><a href="#LogstashTransport..module_HTTPInput">HTTPInput</a></dt>
<dd></dd>
<dt><a href="#LogstashTransport..module_TCPInput">TCPInput</a></dt>
<dd></dd>
<dt><a href="#LogstashTransport..module_UDPInput">UDPInput</a></dt>
<dd></dd>
<dt><a href="#LogstashTransport..module_WebSocketInput">WebSocketInput</a></dt>
<dd></dd>
<dt><a href="#module_LogstashTransport">LogstashTransport</a></dt>
<dd></dd>
</dl>

<a name="LogstashTransport..module_HTTPInput"></a>

## HTTPInput

* [HTTPInput](#LogstashTransport..module_HTTPInput)
    * [~module.exports](#exp_LogstashTransport..module_HTTPInput--module.exports) ⏏
        * [new module.exports(options)](#new_LogstashTransport..module_HTTPInput--module.exports_new)
        * [~HTTPInput](#LogstashTransport..module_HTTPInput--module.exports..HTTPInput)
            * [new HTTPInput()](#new_LogstashTransport..module_HTTPInput--module.exports..HTTPInput_new)

<a name="exp_LogstashTransport..module_HTTPInput--module.exports"></a>

### ~module.exports ⏏
**Kind**: inner class of [<code>HTTPInput</code>](#LogstashTransport..module_HTTPInput)  
<a name="new_LogstashTransport..module_HTTPInput--module.exports_new"></a>

#### new module.exports(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object returned from the LogstashTransport class |

<a name="LogstashTransport..module_HTTPInput--module.exports..HTTPInput"></a>

#### module.exports~HTTPInput
**Kind**: inner class of [<code>module.exports</code>](#exp_LogstashTransport..module_HTTPInput--module.exports)  
<a name="new_LogstashTransport..module_HTTPInput--module.exports..HTTPInput_new"></a>

##### new HTTPInput()
The class that does transmission of logs using the HTTP Requests

<a name="LogstashTransport..module_TCPInput"></a>

## TCPInput

* [TCPInput](#LogstashTransport..module_TCPInput)
    * [~module.exports](#exp_LogstashTransport..module_TCPInput--module.exports) ⏏
        * [new module.exports(options)](#new_LogstashTransport..module_TCPInput--module.exports_new)
        * [~TCPInput](#LogstashTransport..module_TCPInput--module.exports..TCPInput)
            * [new TCPInput()](#new_LogstashTransport..module_TCPInput--module.exports..TCPInput_new)

<a name="exp_LogstashTransport..module_TCPInput--module.exports"></a>

### ~module.exports ⏏
**Kind**: inner class of [<code>TCPInput</code>](#LogstashTransport..module_TCPInput)  
<a name="new_LogstashTransport..module_TCPInput--module.exports_new"></a>

#### new module.exports(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object returned from the LogstashTransport class |

<a name="LogstashTransport..module_TCPInput--module.exports..TCPInput"></a>

#### module.exports~TCPInput
**Kind**: inner class of [<code>module.exports</code>](#exp_LogstashTransport..module_TCPInput--module.exports)  
<a name="new_LogstashTransport..module_TCPInput--module.exports..TCPInput_new"></a>

##### new TCPInput()
The class that does transmission of logs using the TCP input

<a name="LogstashTransport..module_UDPInput"></a>

## UDPInput

* [UDPInput](#LogstashTransport..module_UDPInput)
    * [~module.exports](#exp_LogstashTransport..module_UDPInput--module.exports) ⏏
        * [new module.exports(options)](#new_LogstashTransport..module_UDPInput--module.exports_new)
        * [~UDPInput](#LogstashTransport..module_UDPInput--module.exports..UDPInput)
            * [new UDPInput()](#new_LogstashTransport..module_UDPInput--module.exports..UDPInput_new)

<a name="exp_LogstashTransport..module_UDPInput--module.exports"></a>

### ~module.exports ⏏
**Kind**: inner class of [<code>UDPInput</code>](#LogstashTransport..module_UDPInput)  
<a name="new_LogstashTransport..module_UDPInput--module.exports_new"></a>

#### new module.exports(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object returned from the LogstashTransport class |

<a name="LogstashTransport..module_UDPInput--module.exports..UDPInput"></a>

#### module.exports~UDPInput
**Kind**: inner class of [<code>module.exports</code>](#exp_LogstashTransport..module_UDPInput--module.exports)  
<a name="new_LogstashTransport..module_UDPInput--module.exports..UDPInput_new"></a>

##### new UDPInput()
The class that does transmission of logs using the UDP input

<a name="LogstashTransport..module_WebSocketInput"></a>

## WebSocketInput

* [WebSocketInput](#LogstashTransport..module_WebSocketInput)
    * [~WebSocketInput](#LogstashTransport..module_WebSocketInput..WebSocketInput)
        * [new WebSocketInput()](#new_LogstashTransport..module_WebSocketInput..WebSocketInput_new)

<a name="LogstashTransport..module_WebSocketInput..WebSocketInput"></a>

### WebSocketInput~WebSocketInput
**Kind**: inner class of [<code>WebSocketInput</code>](#LogstashTransport..module_WebSocketInput)  
<a name="new_LogstashTransport..module_WebSocketInput..WebSocketInput_new"></a>

#### new WebSocketInput()
The class that does transmission of logs using the WebSockets

<a name="module_LogstashTransport"></a>

## LogstashTransport

* [LogstashTransport](#module_LogstashTransport)
    * [module.exports](#exp_module_LogstashTransport--module.exports) ⏏
        * [new module.exports(options)](#new_module_LogstashTransport--module.exports_new)
        * [~LogstashTransport](#module_LogstashTransport--module.exports..LogstashTransport) ⇐ <code>Transport</code>
            * [new LogstashTransport()](#new_module_LogstashTransport--module.exports..LogstashTransport_new)
        * [~log(info, callback)](#module_LogstashTransport--module.exports..log)

<a name="exp_module_LogstashTransport--module.exports"></a>

### module.exports ⏏
**Kind**: Exported class  
<a name="new_module_LogstashTransport--module.exports_new"></a>

#### new module.exports(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The Configuration object |
| options.name | <code>String</code> | The name of the transport |
| options.input | <code>String</code> | The input that you want to use |
| options.host | <code>String</code> | The Logstash server host |
| options.port | <code>String</code> | The port of the Logstash pipeline you've configured |

<a name="module_LogstashTransport--module.exports..LogstashTransport"></a>

#### module.exports~LogstashTransport ⇐ <code>Transport</code>
**Kind**: inner class of [<code>module.exports</code>](#exp_module_LogstashTransport--module.exports)  
**Extends**: <code>Transport</code>  
<a name="new_module_LogstashTransport--module.exports..LogstashTransport_new"></a>

##### new LogstashTransport()
The main class that adds the Logstash capabilities to Winston

<a name="module_LogstashTransport--module.exports..log"></a>

#### module.exports~log(info, callback)
**Kind**: inner method of [<code>module.exports</code>](#exp_module_LogstashTransport--module.exports)  

| Param | Type | Description |
| --- | --- | --- |
| info | <code>Object</code> | The log object that needs to be sent to Logstash |
| callback | <code>function</code> | Callback function to call, once processing the log message is processed |

