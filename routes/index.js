var path = require('path');
var fs = require('fs');

exports.index = function(req, res, next){
  res.render('index');
};


exports.robots = function(req, res, next){
  res.set('Content-Type', 'text/plain');
  var buffer = fs.readFileSync(__dirname + '/../robots.txt');
  res.send(buffer);
}
