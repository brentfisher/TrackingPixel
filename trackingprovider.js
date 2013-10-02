var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

TrackingProvider = function(host, port) {
this.db = new Db('node-tracking', new Server(host, port, {safe: false}, {auto_reconnect: true}, {}));
this.db.open(function(){});
};

TrackingProvider.prototype.getCollection = function(callback) {
  this.db.collection('tracking', function(e, tracking_collection) {
    if (e) callback(e);
    else callback(null, tracking_collection);
  });
};

TrackingProvider.prototype.save = function(tracked, callback) {
  this.getCollection(function(e, tracking_collection) {
    if (e) callback(e);
    else {
      tracking_collection.insert(tracked, function() {
        callback(null, tracked);
      });
    }
  });
};

exports.TrackingProvider = TrackingProvider;
