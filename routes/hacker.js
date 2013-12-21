var db = require('./db');

exports.collect = function (req, res, next) {
  //get the user emails, store them in the db
  if (req.body) {
    //create a new hacker document
    var hacker = db.Hacker({
      hacker : req.body.name,
      email : req.body.email
    });

    hacker.save( function (err, result) {
      if (err) {
        //Handle this error.
        throw err;
      }
      res.render('thanks', { name : result.hacker});
    });
  }
  else {
    //There was no form data
    res.redirect('/')
  }

};