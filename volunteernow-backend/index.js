const express = require("express");
const connection = require("./db");
const { userRouter } = require("./Routes/user.route");
const app = express();
const cors = require("cors");
const { agencyRouter } = require("./Routes/agency.route");
const { volunteer } = require("./Routes/volunteer.route");

//for import from .env file
require("dotenv").config();

//for cross origin resource sharing
app.use(cors());

app.use(express.json());
app.use("/users", userRouter);
app.use("/agency", agencyRouter);
app.use("/volunteer", volunteer)
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
