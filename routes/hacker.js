var db = require('./db');
var sendgrid = require('sendgrid')(process.env.SENDGRID_USERNAME, process.env.SENDGRID_PASSWORD);

exports.collect = function (req, res, next) {

  //get the user emails, store them in the db
  if (req.body) {
    //create a new hacker document
    console.log(req.body.email)
    if(validateEmail(req.body.email)){
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
    else{
      console.log('not saved');
      res.send(204);
    }
  }
  else {
    //There was no form data
    res.send(204);
  }

};

function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 


exports.register = function(req,res,next){
  res.render('register');

}

exports.regi_sponsors = function(req,res,next){
  res.render('register_sponsors');
}