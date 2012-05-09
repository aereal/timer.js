var Timer;

Timer = (function() {

  Timer.name = 'Timer';

  function Timer(time) {
    this.time = time;
    this.callbacks = [];
  }

  Timer.prototype.addListener = function(callback) {
    return this.callbacks.push(callback);
  };

  Timer.prototype.start = function() {
    var composed;
    composed = _.compose.apply(_, this.callbacks);
    this.id = setTimeout((function() {
      return composed.call();
    }), this.time);
  };

  Timer.prototype.stop = function() {
    clearTimeout(this.id);
  };

  return Timer;

})();
