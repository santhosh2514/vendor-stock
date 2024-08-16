const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../stockData.json');

const readStockData = () => {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
};
  
const writeStockData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

module.exports = { 
    readStockData,
    writeStockData
}