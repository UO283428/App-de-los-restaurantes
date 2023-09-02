var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/indexRouter');
var usersRouter = require('./routes/users');
var imageRouter = require('./routes/api-webapp/imageRoutes'); // added by me
var questionsRouter = require('./routes/api-webapp/questionsRoutes'); // added by me

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors()); // Use this after the variable declaration

app.use('/', indexRouter);
app.use('/users', usersRouter);

// define routes for delivering images
app.use('/', imageRouter);
app.use('/', questionsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.title = 'Error';
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;