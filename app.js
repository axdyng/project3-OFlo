// requiring installed modules
var express       = require('express'),
    morgan        = require('morgan'),
    cookieParser  = require('cookie-parser'),
    session       = require('express-session');

var app = express();

// using middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({
  secret: 'oflololflololflofloflolol',  // used to sign session ID
  saveUninitialized: true,             // set true to save to db
  resave: true
}));

app.use('/', function(req, res){
  res.send('Hello!');
  console.log(req.cookies);    // session ID '.' signature to auth with server
  console.log(req.session);
});

/* ~~~~ Setting up server port ~~~~ */
var port = process.env.PORT || 1337;
// .set(name, value)
app.set('port', port);
// .listen(port, callback)
app.listen(app.get('port'), function() {
  console.log('Running on port: ' + app.get('port'));
});
