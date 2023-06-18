const express = require("express");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const { VolunteerModel } = require("../Model/Volunteer.model");
const { AgencyModel } = require("../Model/Agency.model");
const jwt = require("jsonwebtoken");
const { passwordValidater } = require("../Middleware/validate.middleware");
//route for an volunteer to register
userRouter.post("/volunteerregister", passwordValidater, async (req, res) => {
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
userRouter.post("/agnecyregister", passwordValidater, async (req, res) => {
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

//route for login
userRouter.post("/login", async (req, res) => {
  const { email, password, role } = req.body;

  //checking if the user is a volunteer or an agency
  if (role == "volunteer") {
    //if the user is a volunteer, then find the volunteer in the database
    const volunteer = await VolunteerModel.findOne({ email: email });
    try {
      //comparing the password with the password in the database
      bcrypt.compare(password, volunteer.password, (err, result) => {
        if (result) {
          //if the password matches, then create a token with the expire time of 7 days
          const token = jwt.sign({ userId: volunteer._id }, "contribute", {
            expiresIn: "7d",
          });
          //sending the token to the frontend after successful login
          res
            .status(200)
            .json({ msg: "Volunteer logged in successfull", token });
        } else {
          res.status(200).json({ msg: "Wrong credentials" });
        }
      });
    } catch (error) {
      res.status(400).json({ msg: "Somthing went wrong" });
    }
  } else {
    //if the user is an agency, then find the agency in the database
    const agency = await AgencyModel.findOne({ email: email });
    try {
      //comparing the password with the password in the database
      bcrypt.compare(password, agency.password, (err, result) => {
        if (result) {
          //if the password matches, then create a token with the expire time of 7 days
          const token = jwt.sign(
            { userID: agency._id, agencyname: agency.name },
            "contribute",
            {
              expiresIn: "7d",
            }
          );
          //sending the token to the frontend after successful login
          res.status(200).json({ msg: "Agency logged in successfull", token });
        } else {
          res.status(200).json({ msg: "Wrong credentials" });
        }
      });
    } catch (error) {
      res.status(400).json({ msg: "Somthing went wrong" });
    }
  }
});

//exporting the userRouter
module.exports = { userRouter };

/*
***Example volunteer credentials***
email : mmahetaraslam@gmail.com
password : aslammmahA3@
*/
