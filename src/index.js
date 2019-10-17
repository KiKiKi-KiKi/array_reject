'use strict';

let _arrayReject;

if ( Array.prototype.reject ) {
  console.warn('Array.prototype.reject already settinged!');
  _arrayReject = Array.prototype.reject;
  Array.prototype.__reject = _arrayReject;
}

Array.prototype.reject = function(f) {
  let self = Array.from(this);
  const res = [];

  if ( _arrayReject ) {
    self = _arrayReject.apply(self, arguments);
    f = arguments[arguments.length - 1];
  }

  if ( typeof(f) !== 'function' ) {
    return self;
  }

  self.forEach((v) => {
    if ( !f(v) ) {
      res.push(v)
    }
  });

  return res;
}
