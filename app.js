
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
//var url = require('url');

/**
 * Custom Modules
 */
var TrackingProvider = require('./TrackingProvider');

/** 
 * Routes
 */
var routes = require('./routes');
var user = require('./routes/user');
var track = require('./routes/track');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/**
 * Configure Mongo
 */

//var trackingProvider = new TrackingProvider('localhost', 27017);

app.get('/', routes.index);
//app.get('/users', user.list);
app.get('/track', track.tracking);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
