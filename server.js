const express = require("express");
const path = require("path");

const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 8000; // Heroku will need the PORT environment variable

app.use(express.static(path.join(__dirname, "build")));

app.listen(port, () => console.log(`App is live on port ${port}!`));
