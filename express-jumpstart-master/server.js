var express = require("express");
var app = express();

var port = 8001;
var serverStartMessage = "EXPRESS-JUMPSTART listening on port " + port;
var staticFilePath = __dirname + "/public";

app.use('/', express.static(staticFilePath));

app.listen(port, function() {
   console.log(serverStartMessage); 
});
