const express = require("express");
// const auth = require("../middleware/auth");
const {
  create,
  getAll,
  getById,
  deleteById,
  update

} = require("../controllers/userController");
const { login } = require("../controllers/authController")

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", create);
router.delete("/:id", deleteById);
router.post("/login", login);
router.put("/update:id", update);

module.exports = router;
