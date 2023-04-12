const express = require("express")
const { add } = require("../controllers/disLikeController")
const { auth } = require("../middleware/auth")

const router = express.Router();
console.log("===FIRST====>")


router.post("/:id", auth, add)
module.exports = router;
console.log("====SECOND====>")