const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongoUri');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error(error.message);
    // Exti process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
