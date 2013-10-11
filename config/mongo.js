var MongoDB = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

Db = function() {
  var db = new MongoDB('node-tracking', new Server('localhost', 27017, {}), {safe: false});
  return db;
};

exports.Db = Db;
