const express = require("express");

const app = express();

app.use("/test", (req, res, next) => {
  res.send("<h1>Test Page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Home Page</h1>");
});

app.listen(3000, () => {
  console.log(`Server started on port`);
});
