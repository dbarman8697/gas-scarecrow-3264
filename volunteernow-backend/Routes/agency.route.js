const express = require("express");
const { eventModel } = require("../Model/event.model");
const { interestedModel } = require("../Model/interestedVolunteer.model");
const agencyRouter = express.Router();

agencyRouter.post("/createevent", async (req, res) => {
  const { name, category } = req.body;
  const event = await eventModel.findOne({ name, category });
  if (event) {
    try {
      const newEvent = new eventModel(req.body);
      await newEvent.save();
      res.json({ message: "Event created successfully" });
    } catch (error) {
      res.json({ message: error.message });
    }
  } else {
    res.json({
      message: "Event already exists cannot create same event again",
    });
  }
});

agencyRouter.get("/getallevents", async (req, res) => {
  const { agencyId } = req.body;
  const events = await eventModel.find({ agencyId });
  res.json({ events });
});

agencyRouter.delete("/deleteevent/:id", async (req, res) => {
  const { id } = req.params;
  const events = await eventModel.findByIdAndDelete({ _id: id });
  await interestedModel.deleteMany({ eventId: id });
  res.json({ events });
});

module.exports = { agencyRouter };
