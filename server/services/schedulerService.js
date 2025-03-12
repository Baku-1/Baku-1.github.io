const cron = require('node-cron');
const { distributeRewards } = require('./batchTransferService');

cron.schedule('0 0 * * 0', () => {
  console.log('Running weekly rewards distribution');
    distributeRewards();
    });