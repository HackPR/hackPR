var path = require('path');
var fs = require('fs');

exports.index = function(req, res){
  res.render('register');
};

exports.robots = function(req, res){
  res.set('Content-Type', 'text/plain');
  var buffer = fs.readFileSync(__dirname + '/../robots.txt');
  res.send(buffer);
}

exports.register = function(req,res){
  res.redirect('/register.html');
}

exports.sponsorship = function(req,res){
  res.redirect('/sponsorship.pdf');
}
