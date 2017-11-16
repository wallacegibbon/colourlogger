var COLORS = [ "\033[34m", "\033[36m", "\033[32m", "\033[33m", "\033[31m", "\033[35m" ];
var LEVELS = [ "TRACE", "DEBUG", "INFO", "WARN", "ERROR", "FATAL" ];



function preString(level, name) {
  return "[" + current() + "] [" + LEVELS[level] + "] " + name + " -";
}


function current() {
  var t = Date.now() + 8 * 3600 * 1000;
  return (new Date(t)).toISOString().slice(0, 23).replace("T", " ");
}


function wrapColor(level, rawStr) {
  return COLORS[level] + rawStr + "\033[0m";
}


function preInfo(level, name, noColor) {
  var s = preString(level, name);
  return noColor ? s : wrapColor(level, s);
}


function common(level) {
  function log() {
    if (this.noLog || this.level > level)
      return;

    var fn = console.log.bind(0, preInfo(level, this.name, this.noColor));
    fn.apply(console, arguments);
  }

  return log;
}



function Logger(name) {
  this.name = name;
  this.level = 0;
  this.noLog = false;
  this.noColor = false;
}


Logger.prototype.setLevel = function(levelStr) {
  var i = LEVELS.indexOf(levelStr);
  if (i === -1)
    throw new Error("Unknown level string:" + levelStr);
  this.level = i;
};


Logger.prototype.disableLog = function() {
  this.noLog = true;
};


Logger.prototype.enableLog = function() {
  this.noLog = false;
};


Logger.prototype.disableLogColor = function() {
  this.noColor = true;
};


Logger.prototype.enableLogColor = function() {
  this.noColor = false;
};


Logger.prototype.trace = common(0);
Logger.prototype.debug = common(1);
Logger.prototype.info  = common(2);
Logger.prototype.warn  = common(3);
Logger.prototype.error = common(4);
Logger.prototype.fatal = common(5);




function getLogger(name) {
  return new Logger(name);
}


module.exports = {
  getLogger,
  Logger,
};

