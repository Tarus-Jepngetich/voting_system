// node module imports
const express = require("express");
const cors = require("cors");
require("dotenv/config");
const morgan = require("morgan");
const mongoose = require("mongoose");

// jwt imports
const authJwt = require("./helpers/jwt");
const errorHandler = require("./helpers/error-handler");

// routes imports
const studentRoutes = require("./routes/student");
const userRoutes = require("./routes/user");
const schoolRoutes = require("./routes/school");
const contestantRoutes = require("./routes/contestant");

// create an instance of express in a variable named app
const app = express();

// these will be our dot env imports
const PORT = process.env.PORT;
const CONNECTION_STRING = process.env.CONNECTION_STRING;
const DB_NAME = process.env.DB_NAME;

// middlewares
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));
app.use(authJwt());
app.use(errorHandler);

// connecting our api to our server using mongoose
mongoose
  .connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: DB_NAME,
  })
  .then(() => {
    console.log("Database connection is ready...");
  })
  .catch((err) => {
    console.log(err);
  });

// we create our server to listen on a specific port,
// the callback funciton will execute after a successfull iniitalization
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});

// Routes
app.use("/student", studentRoutes);
app.use("/user", userRoutes);
app.use("/school", schoolRoutes);
app.use("/contestant", contestantRoutes);
