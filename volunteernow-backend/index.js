const express = require("express");
const connection = require("./db");
const { userRouter } = require("./Routes/user.route");
const app = express();
//for import from .env file
require("dotenv").config();

app.use(express.json());
app.use("/users", userRouter);

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
