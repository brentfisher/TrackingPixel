var TrackController = require('../controllers/track.js');
module.exports = function(app, db) {
  app.get('/track', TrackController.track);
};
