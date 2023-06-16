const express = require("express");
const { eventModel } = require("../Model/event.model");
const { interestedModel } = require("../Model/interestedVolunteer.model");
const agencyRouter = express.Router();

// endpoint to create an event
agencyRouter.post("/createevent", async (req, res) => {
  const { name, category } = req.body;
  // adding agencyId and agencyName to the req.body
  req.body.agencyId = req.body.userId;
  req.body.agencyName = req.body.userName;

  // checking if the event already exists
  const event = await eventModel.findOne({ name, category });
  if (event) {
    // if the event exists, then send a message
    res.json({
      message: "Event already exists cannot create same event again",
    });
  } else {
    // if the event does not exist, then create a new event
    try {
      // creating a new event using the eventModel
      const newEvent = new eventModel(req.body);
      // saving the event to the database
      await newEvent.save();
      res.json({ message: "Event created successfully" });
    } catch (error) {
      res.json({ message: error.message });
    }
  }
});

agencyRouter.get("/getallevents", async (req, res) => {
  const { agencyId } = req.body;
  // getting all the events created by the agency
  const events = await eventModel.find({ agencyId });
  res.json({ events });
});

agencyRouter.patch("/updateevent/:id", async (req, res) => {
  // getting the loggedin user id from the req.body
  const loggedinUSER = req.body.userId;
  // getting the event id from the req.params
  const { id } = req.params;
  try {
    // getting the agencyId from the event
    const event = await eventModel.findById(id);
    // getting the agencyId from the event
    const userIDfromDB = event.agencyId;
    // checking if the loggedin user is the owner of the event
    if (userIDfromDB === loggedinUSER) {
      // if the loggedin user is the owner of the event, then update the event  with the req.body
      await eventModel.findByIdAndUpdate({ _id: id }, req.body);
      res.json({ message: "Event updated successfully" });
    } else {
      // if the loggedin user is not the owner of the event, then send a message
      res.json({ message: "You are not authorized to update this event" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

agencyRouter.delete("/deleteevent/:id", async (req, res) => {
  // getting the loggedin user id from the req.body
  const loggedinUSER = req.body.userId;
  // getting the event id from the req.params
  const { id } = req.params;
  try {
    // getting the agencyId from the event
    const event = await eventModel.findById(id);
    // getting the agencyId from the event
    const userIDfromDB = event.agencyId;
    // checking if the loggedin user is the owner of the event
    if (userIDfromDB === loggedinUSER) {
      // if the loggedin user is the owner of the event, then delete the event  with the req.body
      const events = await eventModel.findByIdAndDelete({ _id: id });
      // deleting all the interested volunteers for the event from the interestedVolunteer collection
      await interestedModel.deleteMany({ eventId: id });
      res.json({ message: "Event updated successfully", events });
    } else {
      // if the loggedin user is not the owner of the event, then send a message
      res.json({ message: "You are not authorized to update this event" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = { agencyRouter };
