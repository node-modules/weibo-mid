/*!
 * weibo-mid - lib/mid.js
 * 
 * 新浪微博mid与url互转实用工具
 * 初始版本作者: @XiNGRZ (http://weibo.com/xingrz)
 * 
 * Copyright(c) 2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

var mid = {
  BASE62: [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "u", "v", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
    "U", "V", "W", "X", "Y", "Z"
  ]
};

/**
 * Base62 decode.
 * 
 * @param {String} str
 * @return {String}
 */
mid.base62Decode = function (str) {
  var num = 0;
  var len = str.length;
  for (var i = 0; i < len; i++) {
    var n = len - i - 1;
    var s = str[i];
    num += mid.BASE62.indexOf(s) * Math.pow(62, n);
  }
  return num;
};

/**
 * Base64 encode.
 * 
 * @param {String} num
 * @return {String}
 */
mid.base62Encode = function (num) {
  var str = '';
  var r = 0;
  while (num !== 0 && str.length < 100) {
    r = num % 62;
    str = mid.BASE62[r] + str;
    num = Math.floor(num / 62);
  }
  return str;
};

/**
 * Conver base62 hash string to number string.
 * 
 * @param {String} hash weibo hash string, e.g.: "wr4mOFqpbO"
 * @return {String} number string, e.g.: "201110410216293360"
 */
mid.decode = function (hash) {
  var id = '';

  for (var end = hash.length; end > 0; end -= 4) {
    var start = end - 4;
    if (start < 0) {
      start = 0;
    }
    var h = hash.substring(start, end);
    var n = String(mid.base62Decode(h));
    var padding = 7 - n.length;
    if (padding > 0 && start > 0) {
      // not first group and not 7 length string, must add '0' padding.
      for (; padding > 0; padding--) {
        n = '0' + n;
      }
    }
    id = n + id;
  }
  
  return id;
};

/**
 * Convert number string to base62 hash string.
 * 
 * @param {String} mid weibo mid, e.g.: "201110410216293360"
 * @return {String} hash string, e.g.: "wr4mOFqpbO"
 */
mid.encode = function (id) {
  id = String(id);
  if (!/^\d+$/.test(id)) { 
    return id; 
  }

  var hash = '';
  for (var end = id.length; end > 0; end -= 7) {
    var start = end - 7;
    if (start < 0) {
      start = 0;
    }
    var num = id.substring(start, end);
    var h = mid.base62Encode(num);
    var padding = 4 - h.length;
    if (padding > 0 && start > 0) {
      // not first group and not 4 length string, must add '0' padding.
      for (; padding > 0; padding--) {
        h = '0' + h;
      }
    }
    hash = h + hash;
  }
  
  return hash;
};

module.exports = mid;
