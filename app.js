var express = require("express");
var bodyParser = require("body-parser");
var session = require('express-session');

var app = express();


app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('access-control-allow-origin','*')
    next();
    });
    
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

app.use('/', express.static(__dirname + '/public/'));

var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});