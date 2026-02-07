const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_DB;

const initializeDatabase = async () => {
  try {
    const connection = mongoose.connect(MONGO_URI);

    if (connection) {
      console.log("Database connected successfully");
    }
  } catch (error) {
    console.log("Database connection failed");
  }
};

module.exports = { initializeDatabase };
