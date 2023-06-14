const mongoose = require("mongoose");
//for import from .env file
require("dotenv").config();

const connection = mongoose.connect(process.env.mongoURl);

module.exports = connection;
