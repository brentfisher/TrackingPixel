var MongoClient = require('mongodb').MongoClient
  , Server = require('mongodb').Server;

var db =  {
  connect: function(callback) {
    var mongoClient = new MongoClient(new Server('localhost', 27017));
    mongoClient.open(function(err, mongoClient) {
      if (err) throw err;
      else {
        var db = mongoClient.db("inteljs");
        callback(db);
      }
    });
  }
}
module.exports = db;
