const bunyan = require('bunyan');
const customerService = require('./customerService');

const logger = bunyan.createLogger({ name: 'customerController' });

const checkFullfillment = async (req, res) => {
  try {
    const { order } = req.body;
    if (!order || !Array.isArray(order) || order.length === 0) {
      return res.status(400).json({ message: 'Invalid order data'})
    }

    const response = await customerService.checkFullfillment({ order});
    res.json(response);
  } catch (error) {
    logger.error({ method: 'checkFullfillment', err: error }, "Error in checking fullfillment");
    res.status(500).json("Error in checking fullfillment");
  }
}

const getLowestCost = async (req, res) => {
  logger.info({ method: 'getLowestCost' }, "getting lowest cost of order");

  try {
    const { order } = req.body;
    if (!order || !Array.isArray(order) || order.length === 0) {
      return res.status(400).json({ message: 'Invalid order data' });
    }
    const lowestCost = await customerService.getLowestCost({ order });
    res.json({ lowestCost });
  } catch (error) {
    logger.error({ method: 'getLowestCost', err: error }, "Error in getting lowest cost");
    res.status(500).json("Error in getting lowest cost");
  }
}

module.exports = {
  checkFullfillment,
  getLowestCost
}
