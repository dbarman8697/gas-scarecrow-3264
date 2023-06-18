const mongoose = require("mongoose");

// creating a schema; a schema is a blueprint of how the data will be stored in the database
const interestedSchema = new mongoose.Schema(
  {
    eventId: String,
    name: String,
    email: String,
    phone: Number,
  },
  {
    versionKey: false,
  }
);

// creating a model; a model is a collection of documents
const interestedModel = mongoose.model("interested", interestedSchema);

module.exports = { interestedModel };
