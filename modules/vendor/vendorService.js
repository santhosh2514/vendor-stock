const bunyan = require('bunyan');

const { readStockData, writeStockData } = require('../../utils/dataService');

const logger = bunyan.createLogger({ name: 'vendorService' });

const updateStock = async (opts) => {
    try {
        const stockData = readStockData();
        findAndUpdateStock(stockData, opts?.stockUpdate);
        writeStockData(stockData);
    } catch (error) {
        logger.error({ err: error, method: 'updateStock' }, 'Error in updating stock');
        return error;
    }
}

const bulkUpdateStock = async (opts) => {
    try {
        const { bulkStockUpdates } = opts
        const stockData = readStockData();

        for (const stockUpdate of bulkStockUpdates) {
            findAndUpdateStock(stockData, stockUpdate);
        };

        writeStockData(stockData);
    } catch (error) {
        logger.error({ err: error, method: 'bulkUpdateStock' }, 'Error in bulk updating stock');
        return error;
    }
}

const findAndUpdateStock = (stockData, stockUpdate) => {
    const { apparelCode, size, quantity, price } = stockUpdate;

    const existingItem = stockData.apparelStock.find(
        (item) => item?.apparelCode === apparelCode && item?.size === size
    );

    if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.price = price;
    } else {
        stockData.apparelStock.push({ apparelCode, size, quantity, price });
    }
}

module.exports = {
    bulkUpdateStock,
    updateStock
}