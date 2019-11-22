var Twitter = require('twitter');
var config = require('./config.js');
var Mongo = require('./connect_mongo.js');

function searchTweets(query) {
  // Set up your search parameters
  var T = new Twitter(config);
  var params = {
      q: query,
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
}

Mongo.insertObjectsToDatabase([{text: "Texto", titulo: "Titulo"}]);
