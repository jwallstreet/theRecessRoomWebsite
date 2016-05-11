'use strict';
var express = require('express');
var path = require('path');
var app = express();

var server = app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function () {
    var addr = server.address();
    console.log("Chat server listening at", addr.address + ":" + addr.port);
});


app.use(express.static('public'));

