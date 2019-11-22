var Twitter = require('twitter');
var MongoClient = require('mongodb');
var config = require('./config.js');

var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

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
