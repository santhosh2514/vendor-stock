const bodyParser = require("body-parser");
const express = require("express");
const helmet = require("helmet");
const cors = require('cors');
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const apiRoutes = require("./routes");

module.exports = () => {
  const app = express();
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(cors({
        origin: 'http://localhost:3000',
      }));
  app.use(bodyParser.json({ limit: '10mb' }));
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  );
  app.use(bodyParser.json({}));
  app.use(cookieParser());
  app.use(helmet());
  app.use("/api", apiRoutes());

  app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    res.status(err.status || 500);
    res.render('error');
  });
  app.use(function(req, res, next) {
    next(createError(404));
  });

  return app;
};
