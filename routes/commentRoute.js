const express = require("express")
const { create } = require("../controllers/commentController")
const { auth } = require("../middleware/auth")


const router = express.Router();

router.post("/:id", auth, create);

module.exports = router;

