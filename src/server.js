'use strict';

var express = require('express'),
 bodyParser = require('body-parser'), //figure out how to use this in post req
       full = require('./data/full.json'),
       half = require('./data/half.json'),
       mile = require('./data/mile.json'),
       four = require('./data/four.json'),
        one = require('./data/one.json'),
     jquery = require('jquery');

var app = express();
app.use(bodyParser());

app.use('/static', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates/views');




app.get('/', function(req, res){
  res.render('index');
});

app.post('/', function (req,res) {
  var runners;

  var user = {
    name: req.body.name,
    country: req.body.country,
    time: req.body.time
  };

  switch( req.body.race ) {
    case 'full':
      res.render('full', {runners: full, user: user});
      break;
    case 'half':
      res.render('half', {runners: half, user: user});
      break;
    case 'mile':
      res.render('mile', {runners: mile, user: user});
      break;  
    case 'four':
      res.render('four', {runners: four, user: user});
      break;
    case 'one':
      res.render('one', {runners: one, user: user});
      break;
    default: 
      res.render('full', {runners: full, user: user});         
  }

  });

app.listen(3000, function() {
  console.log("The frontend server is running on port 3000!");
});