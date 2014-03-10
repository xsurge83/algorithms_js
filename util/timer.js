var Timer, microtime = require('microtime');

Timer = (function () {


  function Timer(msg) {
    this.msg = msg || 'timer took: ';
    this.startTime = null;
  }

  Timer.prototype.start = function () {
    this.startTime = microtime.now();
    return this;
  };

  Timer.prototype.end = function (msg) {
    var len = microtime.now() - this.startTime;
    if(!msg){
      msg = this.msg;
    }
    return console.log(msg + len +'  microseconds');
  };
  return Timer;
})();

module.exports = Timer;
