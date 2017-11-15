var colourlogger = require("..");

var logger1 = colourlogger.getLogger("wallace");
var logger2 = colourlogger.getLogger("wallace");


logger1.trace("this is a test");
logger1.debug("this is a test");
logger1.info("this is a test");
logger1.warn("this is a test");
logger1.error("this is a test");
logger1.fatal("this is a test");


console.log("\nNow change Level to WARN\n");
logger1.setLevel("WARN");

logger1.trace("this is a test");
logger1.debug("this is a test");
logger1.info("this is a test");
logger1.warn("this is a test");
logger1.error("this is a test");
logger1.fatal("this is a test");


console.log("\nThe level of other logger is not affected\n");
logger2.trace("this is logger 2");
