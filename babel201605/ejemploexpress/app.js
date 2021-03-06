var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use(function (req ,res, next) {
  console.log('peticion recibida');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Conexion a mongodb con mongoose
require('./lib/connectMongoose');

//Modelos
//los requiero solopara que mongoose los conozca
// al iniciar la aplicación
require('./models/Agente');
require('./models/Users');

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

//API V1
app.use('/api/v1/users', require('./routes/api/v1/users'));
app.use('/api/v1/agentes', require('./routes/api/v1/agentes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
      if (req.path.indexOf('/api/') === 0) {
          res.json({ok: false, error: err});
          return;
      }

      res.render('error', {
          message: err.message,
          error: err
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
