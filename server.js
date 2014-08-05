var express = require('express');
var routes = require('./routes/index');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.use(express.favicon(__dirname + '/public/img/favicon.ico')); 
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// app.get('/', routes.index);
// app.get('/register',routes.register);
// app.get('/robots.txt', routes.robots);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
