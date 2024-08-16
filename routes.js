
'use strict';

const express = require('express');

const vendorRoutes = require('./modules/vendor/vendorRoutes');
const customerRoutes = require('./modules/customer/customerRoutes');

const apiRouter = express.Router();

module.exports = () =>
  apiRouter
    .use('/vendor', vendorRoutes())
    .use('/customer', customerRoutes())
    .all('*', () => {
      throw new Error('Not found');
    });
