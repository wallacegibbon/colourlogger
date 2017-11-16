var colourlogger = require("..");

var logger1 = colourlogger.getLogger("logger1");
var logger2 = colourlogger.getLogger("logger2");

//var info = "A quick brown fox jumps over the lazy dog";
var info = "test string";


console.log("== Normal log ==");

logger1.trace(info);
logger1.debug(info);
logger1.info(info);
logger1.warn(info);
logger1.error(info);
logger1.fatal(info);

console.log("== Change Level to WARN ==");
logger1.setLevel("WARN");

logger1.trace(info);
logger1.debug(info);
logger1.info(info);
logger1.warn(info);
logger1.error(info);
logger1.fatal(info);

console.log("== The level of other loggers is not affected ==");
logger2.trace(info);

console.log("== Restore level of logger1 ==");
logger1.setLevel("TRACE");
logger1.trace(info);


console.log("== Disable log ==");
logger1.disableLog();
logger1.fatal(info);
console.log("== Enable log ==");
logger1.enableLog();
logger1.fatal(info);

console.log("== Disable log color ==");
logger1.disableLogColor();
logger1.trace(info);

console.log("== Enable log color ==");
logger1.enableLogColor();
logger1.trace(info);
