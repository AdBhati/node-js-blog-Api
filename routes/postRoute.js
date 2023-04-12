const express = require("express")
const { create } = require("../controllers/postController")
const { auth } = require("../middleware/auth")

const router = express.Router();

router.post("/", auth, create);
// router.get("/", getAllPost)
module.exports = router;
