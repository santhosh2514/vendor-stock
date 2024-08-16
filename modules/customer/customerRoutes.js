const express = require('express');

const customerController = require('./customerController');

const router = express.Router();

module.exports = () => {
    router.post('/checkFullfillment', customerController.checkFullfillment);
    router.post('/getLowestCost', customerController.getLowestCost);
    return router;
}