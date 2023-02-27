const mongoose = require('mongoose');

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.DBURL)

  console.log('MongoDB connected')
};

module.exports = connectDB