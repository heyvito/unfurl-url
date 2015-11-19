var URL = require('url'),
    request = require('request');

var callbackWrapper = function(callback) {
    if(!!callback && typeof(callback) === 'function') {
        return callback;
    } else {
        return function() { /* noop */ };
    }
};

var unfurl = {
    url: function(url, options, callback) {
        if(typeof options === 'function') {
            callback = options;
            options = {};
        }
        if(typeof options !== 'object') {
            options = {}; // reset it.
        }
        options.maxHops = options.maxHops || 20;
        callback = callbackWrapper(callback);
        var log = function() {
            if(options.verbose) {
                console.log.apply(console, arguments);
            }
        }
        log('Unfurling: ', url, ' Hops: ', options.hops || 0, 'maxHops: ', options.maxHops);
        if((options.hops || 0) === options.maxHops) {
            callback(new Error('too_many_redirects'), null);
            return;
        }
        var parsed = URL.parse(url);
        if(!parsed || !parsed.host || !parsed.protocol) {
            callback(new Error('invalid_url'), null);
            return;
        }

        if(parsed.protocol !== 'http:' && parsed.protocol !== 'https:') {
            callback(new Error('invalid_protocol'), null);
            return;
        }

        if(!options.jar) {
            options.jar = request.jar();
        }

        request({
            uri: parsed,
            jar: options.jar,
            followRedirect: false,
            followAllRedirects: false,
            method: "GET"
        }, function(error, response, body) {
            if(!!error) {
                callback(error, null);
                return;
            }
            if(Math.floor(response.statusCode / 100) === 3 && 'location' in response.headers) {
                var next = response.headers['location'];
                if(next === url) {
                    callback(null, next);
                    return;
                }
                options.hops = (options.hops || 0) + 1;
                return unfurl.url(URL.resolve(url, next), options, callback);
            } else {
                callback(null, url);
                return;
            }
        });
    }
};

module.exports = unfurl;
