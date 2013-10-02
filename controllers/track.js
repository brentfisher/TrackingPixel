var trackingProvider = new TrackingProvider();

exports.tracking = function(req, res){
  var data = req.query;
  console.log(data);
  trackingProvider.save(req.query, function(e,d) {
    console.log(e);
  });
  res.send("tracked");
};

