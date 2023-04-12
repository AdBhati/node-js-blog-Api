const express = require("express")
const { add } = require("../controllers/likeController")
const { auth } = require("../middleware/auth")

const router = express.Router();
console.log("========>")

router.post("/:id", auth, add);
module.exports = router;
console.log(".>>>>>")