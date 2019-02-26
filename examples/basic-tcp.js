const winston = require("winston")
const LogstashTransport = require("../dist/index-min")
const logger = winston.createLogger({
    level:"info",
    transports:[
        new LogstashTransport({
            host:"172.28.230.203",
            port:28772,
            input:"tcp"
        }),
        new winston.transports.Console()
    ]
});
logger.info("Hello, world!")