const mongoose = require("mongoose");

// creating a schema; a schema is a blueprint of how the data will be stored in the database
const AgencySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: Number,
    address: String,
    city: String,
    state: String,
    zip: Number,
    password: String,
  },
  {
    versionKey: false,
  }
);

// creating a model; a model is a collection of documents
const AgencyModel = mongoose.model("Agency", AgencySchema);

module.exports = { AgencyModel };
