var TrackController = {
 track: function(req, res) {
   res.status(200);
   var data = 
   {
       qsparams: req.query,
       ip: req.ip,
       url: req.url,
       xhr: req.xhr
   };
   console.log(data);
   res.write("");
   res.end();
 }

};
module.exports = TrackController;
