const app = require('./app');
const { distributeRewards } = require('./services/schedulerService');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
    distributeRewards();
    });