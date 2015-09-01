'use strict';

var express = require('express'),
 bodyParser = require('body-parser'), //figure out how to use this in post req
   marathon = require('./data/marathon.json'),
     jquery = require('jquery');

var app = express();
app.use(bodyParser());

app.use('/static', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates/views');

app.get('/', function(req, res){
  res.render('index');
});

app.get("/marathon", function (req,res) {  
  var runners = marathon;
  res.render('marathon', { runners : runners });
});

app.post('/', function (req,res) {
var user = {
  name: req.body.name,
  country: req.body.country,
  time: req.body.time
};

var makeHTML = function (obj) {
  var runners = marathon;
  var msg = '<ul>';
  for(var key in obj) {
    msg += '<li>' + obj[key] + '</li>'
  }
  return msg + '</ul>';
}
var html = makeHTML(user);
res.render('marathon', {runners: marathon, user: user});
  // res.send(html);
});

app.listen(3000, function() {
  console.log("The frontend server is running on port 3000!");
});