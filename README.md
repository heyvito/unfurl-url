# Unfurl URL
![npm](https://nodei.co/npm/unfurl-url.png)

[![Build Status](https://travis-ci.org/victorgama/unfurl-url.svg?branch=master)](https://travis-ci.org/victorgama/unfurl-url)
[![Coverage Status](https://coveralls.io/repos/victorgama/unfurl-url/badge.svg?branch=master&service=github)](https://coveralls.io/github/victorgama/unfurl-url?branch=master)
[![npm version](https://badge.fury.io/js/unfurl-url.svg)](https://badge.fury.io/js/unfurl-url)
[![Dependency Status](https://david-dm.org/victorgama/unfurl-url.svg)](https://david-dm.org/victorgama/unfurl-url)

`unfurl-url` is a simple tool to unminifies URLs. It is actually used by D3 Estudio's [weekly-digest](http://github.com/d3estudio/weekly-digest) project.

# Installing
Install it through NPM:
```
npm install unfurl-url
```

# Usage
```javascript
var unfurl = require('unfurl-url');
unfurl.url('http://tinyurl.com/2lekkm', function(error, url) {
    if(!error) {
        console.log(url);
    }
});

// => https://github.com/
```

# License
```
The MIT License (MIT)

Copyright (c) 2015 Victor Gama

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
