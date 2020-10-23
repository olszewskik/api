const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send([1, 2, 3]);
});

module.exports = router;
