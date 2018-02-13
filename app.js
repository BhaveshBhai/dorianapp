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


var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.get('/:date',function(req,res){
  var input = decodeURI(req.params.date);
  var isNumber = /^\d+$/.test(input);
  var unix, string;
  if(isNumber){
    var t = new Date(parseInt(input));
    string = t.toUTCString();
    unix = input;
  } else {
    unix = Date.parse(input) || "null";
    string= Date.parse(input) ? input : "null";
  }

  var output = {
    string: string,
    unix:unix,
  };

  res.json(output)
});

app.listen(PORT,function(){
  console.log('server successfully started on port '+PORT);
});




