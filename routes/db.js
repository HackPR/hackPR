var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hack');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {
  console.log('DB connected.');
});

var hackerSchema = mongoose.Schema({
    email : String
  });

  exports.Hacker = mongoose.model('Hacker', hackerSchema);

