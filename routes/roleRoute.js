const express = require("express");
const { create } = require("../controllers/roleController");

const router = express.Router();

router.post("/", create);
module.exports = router;