/*!
 * weibo-mid - test/mid.test.js
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var mid = require('../');
var should = require('should');

describe('mid.test.js', function () {
  var expects = [
    ['1', '1'],
    ['0', '0'],
    ['111111', 'sU7'],
    ['11010123', '14eMj'],
    ['1024', 'gw'],
    ['1024012131', '1EgPJN'],
    ['3600375418559878', 'A09LvzUOy'],
    ['201110410216293360', 'wr4mOFqpbO'],
    ['231101124784859058', 'Bh0tgako3U'],
    ['3491273850170657', 'yCirT0Iox'],
  ];

  it('should encode success', function () {
    expects.forEach(function (item) {
      mid.encode(item[0]).should.equal(item[1]);
    });
  });

  it('should decode success', function () {
    expects.forEach(function (item) {
      mid.decode(item[1]).should.equal(item[0]);
    });
  });
});