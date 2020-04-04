window.util = {
  copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  debounce(fn, wait) {
    var timer = null;
    return function () {
      var context = this;
      var args = arguments;
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, wait);
    };
  },
  throttle(fn, gapTime) {
    let _lastTime = null;

    return function () {
      let _nowTime = +new Date();
      if (_nowTime - _lastTime > gapTime || !_lastTime) {
        fn();
        _lastTime = _nowTime;
      }
    };
  }
};
