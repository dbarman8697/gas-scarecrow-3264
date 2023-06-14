const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const { VolunteerModel } = require("../Model/Volunteer.model");
const { AgencyModel } = require("../Model/Agency.model");

//route for an volunteer to register
userRouter.post("/volunteerregister", async (req, res) => {
  const { name, email, phone, zip, password } = req.body;

  try {
    //checking if the volunteer already exists
    const verify = await VolunteerModel.findOne({ email: email });
    if (verify) {
      res.status(400).json({ message: "User already exists" });
    } else {
      // if the user does not exist, then create a new user
      // hashing the password using bcrypt
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.status(500).json({ message: err.message });
        }
        const newUser = new VolunteerModel({
          name,
          email,
          phone,
          zip,
          password: hash,
        });
        // saving the volunteer to the database
        await newUser.save();
        res.status(200).json({ message: "Volunteer created successfully" });
      });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
});

//route for an agency to register
userRouter.post("/agnecyregister", async (req, res) => {
  const { name, email, phone, address, city, state, zip, password } = req.body;
  try {
    //checking if the volunteer already exists
    const verify = await AgencyModel.findOne({ email: email });
    if (verify) {
      res.status(400).json({ message: "Agency already exists" });
    } else {
      // if the user does not exist, then create a new user
      // hashing the password using bcrypt
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.status(500).json({ message: err.message });
        } else {
          const newAgency = new AgencyModel({
            name,
            email,
            phone,
            zip,
            address,
            city,
            state,
            password: hash,
          });
          await newAgency.save();
          // saving the volunteer to the database
          res.status(200).json({ message: "Agency created successfully" });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
});

module.exports = { userRouter };
