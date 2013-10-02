
TrackingProvider = function() {
this.db = new Db();
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
