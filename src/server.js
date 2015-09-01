'use strict';

var express = require('express'),
 bodyParser = require('body-parser'), //figure out how to use this in post req
   marathon = require('./data/marathon.json');

var app = express();
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates/views');

app.get('/', function(req, res){
    var runners = marathon;

    res.render('index', {
      runners: runners,
    });
});

app.post('/', function (req,res) {
  
  var name = req.body.name;
  var country = req.body.country;
  var time = req.body.time;

  var html = '<h1>' + name + '</h1>';
  console.log(html);
  res.send(req.body);
})

app.listen(3000, function() {
  console.log("The frontend server is running on port 3000!");
});