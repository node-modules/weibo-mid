weibo-mid [![Build Status](https://secure.travis-ci.org/fengmk2/weibo-mid.png)](http://travis-ci.org/fengmk2/weibo-mid) [![Coverage Status](https://coveralls.io/repos/fengmk2/weibo-mid/badge.png)](https://coveralls.io/r/fengmk2/weibo-mid)
=======

![logo](https://raw.github.com/fengmk2/weibo-mid/master/logo.png)

Convert [Weibo Open API](http://open.weibo.com) mid to base62 hash string.

## Install

```bash
$ npm install weibo-mid
```

## Usage

```js
var mid = require('weibo-mid');

mid.encode('3600375418559878').should.equal('A09LvzUOy');
mid.decode('A09LvzUOy').should.equal('3600375418559878');
```

## License 

(The MIT License)

Copyright (c) 2013 fengmk2 &lt;fengmk2@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
