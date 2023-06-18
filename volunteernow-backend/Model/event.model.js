const mongoose = require("mongoose");

// creating a schema; a schema is a blueprint of how the data will be stored in the database
const eventSchema = new mongoose.Schema(
  {
    agencyId: String,
    agencyName: String,
    name: String,
    cagtegory: String,
    date: Date,
    time: String,
    phone: Number,
    requiredVolunteers: Number,
    location: String,
    description: String,
  },
  {
    versionKey: false,
  }
);

// creating a model; a model is a collection of documents
const eventModel = mongoose.model("event", eventSchema);

module.exports = { eventModel };
