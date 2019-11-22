const MongoClient = require('mongodb').MongoClient;

function insertObjectsToDatabase(objects) {
  const uri = "mongodb+srv://user_bda:bdavanzadas@cluster0-oqgjb.mongodb.net/video?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    if (err) {
      console.log("There was an error")
    }

    var dbo = client.db("twitter");
    const collection = dbo.collection("tweets");

    objects.forEach((obj) => {
      console.log(obj)
      collection.insertOne(obj, function(err, res) {
        if (err) throw err;
        console.log("Document inserted");
        client.close();
      });
    })


  });
}

module.exports = {
  insertObjectsToDatabase
}
