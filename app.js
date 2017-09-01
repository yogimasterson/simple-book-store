const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

app.set("views", path.join(__dirname, "src/views"));
app.set("view engine", "ejs");

app.use(favicon(path.join(__dirname, "public", "./images/favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/series", (req, res) => {
  res.render("pages/top-series")
});

app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
