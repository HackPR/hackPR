var path = require('path');
var fs = require('fs');

exports.index = function(req, res, next){
  res.render('index');
};

exports.get_sponsorship = function(req, res, next) {
  var file = '/public/sponsorship.pdf'
  fs.readFile(file, function (err, buffer) {
    res.contentType("application/pdf");
    res.send(buffer);
  });
};