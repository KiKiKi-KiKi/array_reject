import '../src';

function over(n) {
  return function(x) {
    return x > n;
  };
}

function under(n) {
  return function(x) {
    return x < n;
  };
}

describe('Array.reject', () => {
  const arr = [1, 2, 3, 4, 5];
  test('When argument is not function, do nothing', () => {
    expect( arr.reject('') ).toEqual(arr);
  });

  test('When no argument, do nothing', () => {
    expect( arr.reject() ).toEqual(arr);
  });

  test('Return new array which do not match a condition', () => {
    expect( arr.reject(over(3)) ).toEqual([1, 2, 3]);

    expect( arr.reject(under(3)) ).toEqual([3, 4, 5]);

    const cities = [
      'Tokyo',
      'Kyoto',
      'Osaka',
      'NewYork',
      'Helsinki',
      'Tampere',
      'Espoo'
    ];

    expect( cities.reject(function(val) {
      return val.match(/o/i);
    }) ).toEqual(['Helsinki', 'Tampere']);
  });
});
