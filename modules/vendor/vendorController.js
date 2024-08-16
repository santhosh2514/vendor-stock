const bunyan = require('bunyan');
const vendorService = require('./vendorService');

const logger = bunyan.createLogger({ name: 'vendorController' });

const updateStock = async (req, res) => {
  try {
    if (!req.body || !req.body.apparelCode || !req.body.size || (!req.body.quantity && !req.body.price)) { 
      return res.status(400).json({ message: 'Invalid stock data' });
    }

    await vendorService.updateStock({ stockUpdate: req.body });
    res.json({ message: 'Stock updated successfully' });
  } catch (error) {
    logger.error({ method: 'updateStock', err: error }, "Error in updating stock");
    res.status(500).json("Error in updating stock data");
  }
}

const bulkUpdateStock = async (req, res) => {
  try {
    const { bulkStockUpdates } = req.body; 
    if (!bulkStockUpdates || !Array.isArray(bulkStockUpdates) || bulkStockUpdates.length === 0) {
      return res.status(400).json({ message: 'Invalid stock data' });
    }

    await vendorService.bulkUpdateStock({ bulkStockUpdates });
    res.json({ message: 'Stock updated successfully' });
  } catch (error) {
    logger.error({ method: 'bulkUpdateStock', err: error }, "Error in getting all files");
    res.status(500).json("Error in bulk updating stock data");
  }
}

module.exports = {
  updateStock,
  bulkUpdateStock
}
