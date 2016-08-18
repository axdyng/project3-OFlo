var express = require('express'),
    morgan  = require('moragn');

var app = express();

app.use(morgan('dev'));
app.use('/', function(req, res){
  res.send('Hello!');
});

/* ~~~~ Setting up server port ~~~~ */
var port = process.env.PORT || 1337;
// .set(name, value)
app.set('port', port);
// .listen(port, callback)
app.listen(app.get('port'), function() {
  console.log('Running on port: ' + app.get('port'));
});
