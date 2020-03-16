const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

require("dotenv").config();

// import routes
const user = require("./routes/user");

// app
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

// database
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Database connected"));

// routes
app.use("/api/v1", user);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
