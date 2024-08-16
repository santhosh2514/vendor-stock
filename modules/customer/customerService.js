const bunyan = require('bunyan');

const { readStockData } = require('../../utils/dataService');

const logger = bunyan.createLogger({ name: 'customerService' });

const checkFullfillment = async (opts) => {
    logger.info({ method: 'checkFullfillment' }, "updating stock of apparel")
    try {
        const { order } = opts;
        const stockData = readStockData();

        const canFulfill = order.every((item) => {
            const stockItem = stockData.apparelStock.find(
                (stock) => stock.apparelCode === item.apparelCode && stock.size === item.size
            );
            return stockItem && stockItem.quantity >= item.quantity;
        });

        return { canFulfill };
    } catch (error) {
        logger.error({ err: error }, 'Error in getting all 3d files list');
        return error;
    }
}

const getLowestCost = async (opts) => {
    logger.info({ method: 'getLowestCost' }, "getting lowest cost")
    try {
        const { order } = opts
        const stockData = readStockData();

        let totalCost = 0;

        for (const item of order) {
            const stockItem = stockData.apparelStock.find(
                (stock) => stock.apparelCode === item.apparelCode && stock.size === item.size
            );

            if (stockItem && stockItem.quantity >= item.quantity) {
                totalCost += stockItem.price * item.quantity;
            }
        }

        return totalCost;
    } catch (error) {
        logger.error({ err: error }, 'Error in getting lowest cost');
        return error;
    }
}

module.exports = {
    checkFullfillment,
    getLowestCost
}