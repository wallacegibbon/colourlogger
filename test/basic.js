var colourlogger = require("..");

var logger1 = colourlogger.getLogger("logger1");
var logger2 = colourlogger.getLogger("logger2");

//var info = "A quick brown fox jumps over the lazy dog";
var info = "test string";


console.log("\n== Normal log ==\n");

logger1.trace(info);
logger1.debug(info);
logger1.info(info);
logger1.warn(info);
logger1.error(info);
logger1.fatal(info);

console.log("\n== Change Level to WARN ==\n");
logger1.setLevel("WARN");

logger1.trace(info);
logger1.debug(info);
logger1.info(info);
logger1.warn(info);
logger1.error(info);
logger1.fatal(info);

console.log("\n== The level of other loggers is not affected ==\n");
logger2.trace(info);

console.log("\n== Restore logger1 ==\n");
logger1.setLevel("TRACE");
logger1.trace(info);

console.log("\n== Disable log color ==\n");
logger1.disableLogColor();
logger1.trace(info);

console.log("\n== Enable log color ==\n");
logger1.enableLogColor();
logger1.trace(info);
