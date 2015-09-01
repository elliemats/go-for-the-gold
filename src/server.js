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
  res.render('marathon', { runners : marathon, user: {} });
});

app.post('/', function (req,res) {
var athletes;

if(req.body.race === 'marathon') {
  athletes = marathon;
  }
  // make other data sets and load data based on the req.body.race
console.log(req.body);
var user = {
  name: req.body.name,
  country: req.body.country,
  time: req.body.time
};

res.render('marathon', {runners: athletes, user: user});

});

app.listen(3000, function() {
  console.log("The frontend server is running on port 3000!");
});