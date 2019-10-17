'use strict';

Array.prototype.reject = function(index) {
  if( typeof(index) !== 'number' ) {
    return this;
  }

  const res = [];
  for(let i = 0, l = this.length; i < l; i += 1) {
    if( i !== index ) {
      res.push(this[i]);
    }
  }
  return res;
};
