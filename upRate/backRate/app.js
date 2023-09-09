const createError = require('http-errors');
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/indexRouter');
const usersRouter = require('./routes/users');
const imageRouter = require('./routes/api-webapp/imageRoutes'); // added by me
const questionsRouter = require('./routes/api-webapp/questionRoutes'); // added by me
const linkRouter = require('./routes/api-webapp/linkRoutes'); // added by me
const bulkdataRouter = require('./routes/api-webapp/bulkdataRouter'); // added by me
const JWTRouter = require('./routes/JWTRouter'); // added by me
const jwtAuth = require('./middlewear/jwtAuth'); // added by me

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors()); // Use this after the constiable declaration
app.use(jwtAuth); // JWT Authentication middleware

app.use('/', indexRouter);
app.use('/users', usersRouter);

// define routes for delivering images
app.use('/', imageRouter);
app.use('/', questionsRouter);
app.use('/', bulkdataRouter); // added by me
app.use('/', JWTRouter); // added by me
app.use('/', linkRouter); // added by me

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    return res.status(401).send('Invalid token or no token provided.');
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.locals.title = 'Error';
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;