var express = require('express'),
routes = require('./routes'),
app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//configure database
var db = require('./config/mongo.js');
db.connect(function(db) { 
  // Yay, it works! See below for debugging:
  // db.collection("jsevents").find({}, function(err, doc) {
  // console.log(doc);
  // });
  routes(app, db);

  app.listen(app.get("port"));
  console.log("Express server listening");
});

