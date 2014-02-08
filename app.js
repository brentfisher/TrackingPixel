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
// require("./mongo.js");

routes(app);

app.listen(app.get("port"));
console.log("Express server listening");
