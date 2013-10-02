/*
 * GET tracking listing.
 */

var trackingProvider = new TrackingProvider('localhost', 27017);

exports.tracking = function(req, res){
  //console.log(req);
  //var data = url.parse(request.url, true);
  var data = req.query;
  console.log(data);

  trackingProvider.save(req.query, function(e,d) {
    console.log(e);
  });
  res.send("tracked");
};

