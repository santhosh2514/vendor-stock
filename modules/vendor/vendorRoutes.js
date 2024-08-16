const express = require('express');

const vendorController = require('./vendorController');

const router = express.Router();

module.exports = () => {
    router.post('/updateStock', vendorController.updateStock);
    router.post('/bulkUpdateStock', vendorController.bulkUpdateStock);
    return router;
}