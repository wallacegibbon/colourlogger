var COLORS = [ "\033[34m", "\033[36m", "\033[32m", "\033[33m", "\033[31m", "\033[35m" ];
var LEVELS = [ "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL" ];


function preInfo(level, name) {
  return COLORS[level] + "[" + (new Date()).toISOString() + "] [" + LEVELS[level] + "] " + name + " -\033[0m";
}

function common(level) {
  function fn() {
    if (level >= this.level)
      console.log.bind(0, preInfo(level, this.name)).apply(console, arguments);
  }
  return fn;
}


function Logger(name) {
  this.name = name;
  this.level = 0;
}

Logger.prototype.trace = common(0);
Logger.prototype.debug = common(1);
Logger.prototype.info  = common(2);
Logger.prototype.warn  = common(3);
Logger.prototype.error = common(4);
Logger.prototype.fatal = common(5);



Logger.prototype.setLevel = function(levelStr) {
  var i = LEVELS.indexOf(levelStr);
  if (i === -1) throw new Error("Unknown level string:" + levelStr);
  this.level = i;
};


/**
 * The logger is not really disabled, ERROR or FATAL will still be enabled.
 */
Logger.prototype.disableLog = function() {
  this.setLevel("ERROR");
};


Logger.prototype.enableLog = function() {
  this.setLevel("TRACE");
};



function getLogger(name) {
  return new Logger(name);
}


module.exports = {
  getLogger,
  Logger,
};
