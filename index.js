const express = require("express");
const mustacheExpress = require("mustache-express");

const app = express();
const port = process.env.PORT || 3000;

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.use(express.static("assets"));
app.get("/", function (req, res) {
  res.render("index", { message: process.env.MESSAGE || "NO MESSAGE SEND" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
