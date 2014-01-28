var db = require('./db');
var dotenv = require('dotenv').load();
var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

exports.collect = function (req, res, next) {

  //get the user emails, store them in the db
  if (req.body) {
    //create a new hacker document
    console.log(req.body.email)
    var hacker = db.Hacker({
      email : req.body.email
    });

    hacker.save( function (err, result) {
      if (err) {
        //Handle this error.
        res.send(404);
        throw err;
      }
      sendgrid.send({
        to : req.body.email,
        from : 'info@hackpr.io',
        subject : 'hackPR: Good things are brewing!',
        html: '<h3>You\'ve been succesfully added to our mailling list.</h3><p>Awesome things are incoming! We\'ll keep you posted on important event details through this email.</p><p>Thanks</p><h5>- HackPR Team </h5>'
      }, function (err, json) {
        if (err) {
          res.send(404);
          throw err;
        }
        res.send(200);
      });
     });
  }
  else {
    //There was no form data
    res.send(204);
  }

};