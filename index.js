var vhost = require( 'vhost' );
const express = require( 'express' );
var config = require('./config.json');



var app = express();
app.use(vhost('localhost', express.static( 'client' )));


var port = config.serverport;
app.listen( port, function() {
    console.log( 'Express server listening on port %d in %s mode', port, app.settings.env );
});