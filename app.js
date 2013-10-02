//Load configuration of environments, dbs
require("./config")

//load application files
require("./lib");
require("./controllers");
require("./routes");

//start the server
require('./config/server.js');
