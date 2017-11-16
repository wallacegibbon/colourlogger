var COLORS = [ "\033[34m", "\033[36m", "\033[32m", "\033[33m", "\033[31m", "\033[35m" ];
var LEVELS = [ "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL" ];


function preInfo(level, name) {
  return "[" + now() + "] [" + LEVELS[level] + "] " + name + " - ";
}


function wrapColor(level, rawStr) {
  return COLORS[level] + rawStr + "\033[0m";
}


function now() {
  return (new Date()).toISOString();
}


function mkLogFn(level, name, noColor) {
  var pre = preInfo(level, name);
  if (!noColor) pre = wrapColor(level, pre);

  return console.log.bind(null, pre);
}


function common(level) {
  function log() {
    if (level >= this.level)
      mkLogFn(this.level, this.name, this.noColor).apply(console, arguments);
  }
  return log;
}


function Logger(name) {
  this.name = name;
  this.level = 0;
  this.noColor = false;
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


Logger.prototype.disableColor = function() {
  this.noColor = true;
};


Logger.prototype.enableColor = function() {
  this.noColor = false;
};



function getLogger(name) {
  return new Logger(name);
}


module.exports = {
  getLogger,
  Logger,
};
