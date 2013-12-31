var db = require('./db');
var dotenv = require('dotenv').load();
var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

exports.collect = function (req, res, next) {
  //get the user emails, store them in the db
  console.log(req.body.email);
  if (req.body) {
    //create a new hacker document
    var hacker = db.Hacker({
      email : req.body.email
    });

    hacker.save( function (err, result) {
      if (err) {
        //Handle this error.
        throw err;
      }
      sendgrid.send({
        to : req.body.email,
        from : 'developer.cesar@gmail.com',
        subject : 'hackPR: Good things are brewing!',
        text : 'Thank you for subscribing to hackPR email, we will keep you posted with event details through your provided email address.'
      }, function (err, json) {
        if (err) {
          throw err;l
        }
        console.log('email sent');
        res.render('thanks');
      });
    });
  }
  else {
    //There was no form data
    res.redirect('/')
  }

};