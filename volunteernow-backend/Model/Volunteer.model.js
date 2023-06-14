const mongoose = require("mongoose");

// creating a schema; a schema is a blueprint of how the data will be stored in the database
const volunteerSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: Number,
    zip: Number,
    password: String,
  },
  {
    versionKey: false,
  }
);

// creating a model; a model is a collection of documents
const VolunteerModel = mongoose.model("volunteer", volunteerSchema);

module.exports = { VolunteerModel };
