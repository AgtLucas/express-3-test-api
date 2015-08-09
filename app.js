'use strict';

var path = require('path');
var join = path.join;
var express = require('express');
var app = express();

var api = 'https://api.forecast.io/forecast/';
var token = process.env.FORECAST_TOKEN;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index', {title: 'E3'});
});

app.listen(3000);
console.log('http://localhost:3000');