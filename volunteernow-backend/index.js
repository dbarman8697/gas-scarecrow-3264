const express = require("express");
const connection = require("./db");
const { userRouter } = require("./Routes/user.route");
const app = express();
const cors = require("cors");
const { AgencyModel } = require("./Model/Agency.model");
const { agencyRouter } = require("./Routes/agency.route");

//for import from .env file
require("dotenv").config();

//for cross origin resource sharing
app.use(cors());

app.use(express.json());
app.use("/users", userRouter);
app.use("/agency", agencyRouter);
//add volunteer route--- aslam

// connecting to the database
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Database connected successfully");
    console.log("Server is running on port ", process.env.port);
  } catch (error) {
    console.log(error);
  }
});
