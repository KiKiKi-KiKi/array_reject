import "./other-arry-reject";
import "../src";

function over(n) {
  return function(x) {
    return x > n;
  };
}

describe('When already set Array.prototype.reject', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  test('Old Array.reject can use the Array.__reject()', () => {
    expect( arr.__reject(0) ).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('This Array.reject can run when argument is only condition function', () => {
    expect( arr.reject(over(3)) ).toEqual([1, 2, 3]);
  });

  test('Can use this Array.reject after old reject function', () => {
    expect( arr.reject(0, over(3)) ).toEqual([2, 3]);

    expect( arr.reject(0, 1, 2, over(3)) ).toEqual([2, 3]);
  });
});
