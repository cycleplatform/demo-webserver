const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

// Register Handlebars view engine
app.engine("handlebars", exphbs());

// Use Handlebars view engine
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", {
    envVars: process.env
  });
});

const PORT = 80;

app.listen(PORT, () => {
  console.log(`App running on port -> ${PORT}`);
});

process.on("SIGINT", function() {
  console.log("Caught interrupt signal");
  process.exit();
});
