var trackingProvider = new TrackingProvider();

exports.tracking = function(req, res){
  //will break this out into a model soon
  var data = 
  {
    qsparams: req.query,
    ip: req.ip,
    url: req.url,
    xhr: req.xhr
  };

  console.log(data);
  //console.log(req.cookies);
  //console.log(req.route);
  console.log(req.ip);
  console.log(req.url);
  console.log(req.xhr);

  trackingProvider.save(data, function(e,d) {
    console.log(e);
  });
  res.send("tracked");
};

