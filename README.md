[![NPM version](https://badgen.net/npm/v/@kikiki_kiki/array-reject)](https://www.npmjs.com/package/@kikiki_kiki/array-reject)
[![Build Status](https://travis-ci.org/chaika-design/array_reject.svg?branch=master)](https://travis-ci.org/chaika-design/array_reject)
[![codecov](https://codecov.io/gh/chaika-design/array_reject/branch/master/graph/badge.svg)](https://codecov.io/gh/chaika-design/array_reject)
[![MIT License](http://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/chaika-design/array_reject/blob/master/package.json)

# array-reject

:warning: This module extend the global Array.prototype.  
`Array.prototype.reject(callback)` return new array which removed value matched condition.  
This is the opposite of `Array.prototype.filter`!

## install

```sh
$ npm install array-reject
```

## usage

```js
import 'array-reject';
```

example

```js
const arr = [1, 2, 3, 4, 5];

function over(n) {
  return function(x) {
    return x > n;
  };
}

arr.reject( over(3) );
// => [1, 2, 3]
arr.filter( over(3) );
// => [4, 5]
```

```js
const cities = [
  'Tokyo',
  'Kyoto',
  'Osaka',
  'NewYork',
  'Helsinki',
  'Tampere',
  'Espoo'
];

cities.reject(function(val) {
  return val.match(/o/i);
});
// => ['Helsinki', 'Tampere']
```

```js
const idols = [
  { name: 'Hoshimiya Ichigo', type: 'cute' },
  { name: 'Kiriya Aoi',       type: 'cool' },
  { name: 'Shibuki Ran',      type: 'sexy' },
  { name: 'Arisugawa Otome',  type: 'pop'  },
  { name: 'Todo Yurika',      type: 'cool' },
  { name: 'Kamiya Shion',     type: 'cool' },
  { name: 'Ichinose Kaede',   type: 'pop'  },
  { name: 'Minowa Hikari',    type: 'sexy' },
  { name: 'Kanzaki Mizuki',   type: 'sexy' },
  { name: 'Natsuki Mikuru',   type: 'pop'  },
  { name: 'Kitaoji Sakura',   type: 'cute' },
  { name: 'Ozora Akari',      type: 'cute' },
  { name: 'Hattori Yu',       type: 'cool' },
  { name: 'Hikami Sumire',    type: 'cool' },
  { name: 'Shinjo Hinaki',    type: 'pop'  },
  { name: 'Kurebayashi Juri', type: 'sexy' },
  { name: 'Kurosawa Rin',     type: 'cool' },
  { name: 'Amahane Madoka',   type: 'cute' },
];

function idolType(type) {
  return function(idol) {
    return idol.type === type
  };
}

const notCoolIdols = idols.reject( idolType('cool') );
/* [
  {name: "Hoshimiya Ichigo", type: "cute"},
  {name: "Shibuki Ran", type: "sexy"},
  {name: "Arisugawa Otome", type: "pop"},
  {name: "Ichinose Kaede", type: "pop"},
  {name: "Minowa Hikari", type: "sexy"},
  {name: "Kanzaki Mizuki", type: "sexy"},
  {name: "Natsuki Mikuru", type: "pop"},
  {name: "Kitaoji Sakura", type: "cute"},
  {name: "Ozora Akari", type: "cute"},
  {name: "Shinjo Hinaki", type: "pop"},
  {name: "Kurebayashi Juri", type: "sexy"},
  {name: "Amahane Madoka", type: "cute"},
] */
```

### When already has Own `Array.reject` ?

Old `Array.prototype.reject` be renamed to `Array.prototype.__reject`.  
And run old reject function before this `Array.prototype.reject`.

:ok_hand:
```js
import './my-array-reject';
import 'array-reject';
```

:innocent:
```js
// This override `array-reject` 
Array.prototype.reject = function() {
  // ...
}

import 'array-reject';
```

example

```js
// my-array-reject.js
Array.prototype.reject = function(index) {
  if( typeof(index) !== 'number' ) return this;

  const res = [];
  for(let i = 0, l = this.length; i < l; i += 1) {
    if( i !== index ) res.push(this[i]);
  }
  return res;
};
```

```js
import './my-array-reject';
import 'array-reject';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function over(n) {
  return function(x) {
    return x > n;
  };
}

// run my Array.reject
arr.__reject(0);
// => [2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.reject(over(3));
// => [1, 2, 3]

// run array-reject after my Array.reject
arr.reject(0, over(3));
// => [2, 3]

// array-reject use last argument as a callback
arr.reject(0, 1, 2, over(3));
// => [2, 3]
```

## test

```sh
$ npm run test
```
