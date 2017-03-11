var assert = require('assert');
var unfurl = require('../lib/unfurl');

describe('unfurl-url', function() {
    var subjects = {
        'bitly': {
            'http://j.mp/Y4seGv': 'http://www.nytimes.com/2013/03/11/world/asia/karzai-accuses-us-and-taliban-of-colluding-in-afghanistan.html?ref=global-home',
            'http://bit.ly/1T1Hul6': 'http://www.polygon.com/2015/11/18/9757114/fallout-4-vault-tec-phone-call'
        },
        't.co': {
            'http://t.co/bxPFQgZ1AV': 'http://www.nytimes.com/2013/03/14/crosswords/bridge/bridge-spring-north-american-championships.html?partner=rss&emc=rss',
            'https://t.co/SlINea0uWD': 'https://github.com/lyst/MakingLyst/blob/master/mobile/ios/coding-standards/style-guide.md'
        },
        'arrows': {
            'http://➡.ws/kd': 'http://www.theglobeandmail.com/technology/tech-news/crtc-will-rescind-unlimited-use-internet-decision---or-ottawa-will-overturn-it/article565223/',
            'http://➡.ws/wwwwwwwww': 'http://www.linkexpander.com/'
        },
        'tinyurl': {
            'http://tinyurl.com/pj94dvk': 'https://github.com/blog/2085-a-new-look-for-repositories',
            'http://tinyurl.com/2lekkm': 'https://github.com/'
        },
        'unfurled urls': {
            'https://twitter.com': 'https://twitter.com',
            'https://github.com': 'https://github.com'
        }
    };

    Object.keys(subjects).forEach(function(name) {
        describe(name, function() {
            Object.keys(subjects[name]).forEach(function(input) {
                var output = subjects[name][input];
                it(['Should unfurl', input, 'to', output].join(' '), function(done) {
                    unfurl.url(input, function(err, url) {
                        if(!!err) { throw err; }
                        assert.equal(url, output);
                        done();
                    });
                });
            });
        });
    });

    describe('Callback', function() {
        it('should not fail if callback is invalid', function() {
            unfurl.url('http://google.com');
            unfurl.url('http://google.com', {}, 'test');
            unfurl.url('http://google.com', 'test');
        });
    });
});
