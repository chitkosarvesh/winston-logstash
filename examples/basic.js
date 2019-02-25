const winston = require("winston");
const LogstashTransport = require("../src/index");
const logger = winston.createLogger({
    level:"info",
    transports:[
        new LogstashTransport({
            host:"172.28.230.203",
            port:28792,
            input:"udp"
        }),
        new winston.transports.Console()
    ]
});
logger.info("Hello, world!");