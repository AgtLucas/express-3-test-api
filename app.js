'use strict';

var path = require('path');
var join = path.join;
var express = require('express');
var app = express();
var request = require('superagent');

var api = 'https://api.forecast.io/forecast/';
var token = process.env.FORECAST_TOKEN;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.get('/le-tempo/forecast/:ll', function(req, res) {
  request
    .get(api + token + '/' + req.params.ll)
    .set('Content-Type', 'application/json')
    .accept('application/json')
    .end(function(e, data) {
      if (e) console.log(e);
      console.log(data.body);
      return res.render('index', {data: data.body});
    });
});

app.listen(3000);
console.log('http://localhost:3000');