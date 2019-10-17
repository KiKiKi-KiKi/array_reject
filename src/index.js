'use strict';

Array.prototype.reject = function(f) {
  const res = [];

  if ( typeof(f) !== 'function' ) {
    return this;
  }

  this.forEach((v) => {
    if ( !f(v) ) {
      res.push(v)
    }
  });

  return res;
}
