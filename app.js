var Twitter = require('twitter');
var config = require('./config.js');

var T = new Twitter(config);

// Set up your search parameters
var params = {
    q: '#mongo',
    count: 10,
    result_type: 'recent',
    lang: 'en'
}
T.get('search/tweets', params, function(err, data, response) {
if(!err){
    console.log(data)
} else {
    console.log(err);
}
})
