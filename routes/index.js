var TrackController = require('../controllers/track.js');
module.exports = function(app) {
  app.get('/track', TrackController.track);
};
