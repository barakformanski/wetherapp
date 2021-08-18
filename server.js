const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
app.use(cors());

const port = process.env.PORT || 8000; // Heroku will need the PORT environment variable

app.use(express.static(path.join(__dirname, "build")));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.listen(port, () => console.log(`App is live on port ${port}!`));
