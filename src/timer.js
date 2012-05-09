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

  Timer.prototype.removeListener = function(callback) {
    return this.callbacks = this.callbacks.filter(function(fn) {
      return fn !== callback;
    });
  };

  Timer.prototype.start = function() {
    var callbacks, firedAt, self;
    callbacks = this.callbacks;
    self = this;
    firedAt = new Date;
    this.id = setTimeout(function() {
      var cb, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = callbacks.length; _i < _len; _i++) {
        cb = callbacks[_i];
        _results.push(cb({
          self: self,
          realErapsed: (new Date) - firedAt
        }));
      }
      return _results;
    }, this.time);
  };

  Timer.prototype.stop = function() {
    clearTimeout(this.id);
  };

  return Timer;

})();
