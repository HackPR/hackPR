var db = require('./db');
var dotenv = require('dotenv').load();
var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

exports.collect = function (req, res, next) {
  //get the user emails, store them in the db
  console.log(req.body.email);
  // if (req.body) {
  //   //create a new hacker document
  //   var hacker = db.Hacker({
  //     email : req.body.email
  //   });

  //   hacker.save( function (err, result) {
  //     if (err) {
  //       //Handle this error.
  //       throw err;
  //     }
  //     sendgrid.send({
  //       to : req.body.email,
  //       from : 'info@hackpr.io',
  //       subject : 'hackPR: Good things are brewing!',
  //       html: '<h3>You\'ve been succesfully added to our mailling list.</h3><p>Awesome things are incoming! We\'ll keep you posted on important event details through this email.</p><p>Thanks</p><h5>- HackPR Team </h5>'
  //     }, function (err, json) {
  //       if (err) {
  //         throw err;
  //       }
  //       res.render('thanks', {email : req.body.email});
  //     });
  //    });
  // }
  else {
    //There was no form data
    res.redirect('/')
  }

};