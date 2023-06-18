const express = require("express");
const { AgencyModel } = require("../Model/Agency.model");
const { interestedModel } = require("../Model/interestedVolunteer.model");
const { eventModel } = require("../Model/event.model");
const { VolunteerModel } = require("../Model/Volunteer.model");
const { auth } = require("../Middleware/auth.middleware");
const volunteer = express.Router();

volunteer.use(auth);
volunteer.get("/event", async (req, res) => {
  try {
    const event = await eventModel.find();
    res.status(200).json({ event });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

volunteer.post("/intrestedvol/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const user = await VolunteerModel.findById(req.body.userId);
  console.log(user);
  try {
    const interestedVol = new interestedModel({
      eventId: id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
    await interestedVol.save();
    res
      .status(200)
      .json({
        msg: `you have registered for this event the agency will get back to you by email`,
      });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
});

module.exports = { volunteer };
