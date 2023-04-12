const User = require("../models/user");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const Role = require("../models/role");

// get all users
exports.getAll = async (req, res, next) => {
  const users = await User.findAll();
  res.status(200).json({ users: users });
};

// get user by id
exports.getById = async (req, res, next) => {
  const user = await User.findByPk(req.params.id);

  res.status(200).json({ user });
};

// create new user
exports.create = async (req, res, next) => {
  const { firstName, email, password } = req.body;

  // const validRoles = ['ADMIN', 'USER', 'SUPER_ADMIN'];
  // if (!validRoles.include(role)) return res.status(400).json({ error: "Invalid Roles" })

  // const newRole = await User.findOne({ name: role })
  // if (!newRole) {
  //     await Role.create({ name: role })
  // }

  const existingUser = await User.findOne({ where: { email: email } });
  if (existingUser) return res.status(400).json({ error: "user exists" })

  const roleId = await Role.findOne({ where: { name: 'USER' } })
  console.log("================>", roleId);

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    firstName,
    email,
    password: hashedPassword,
    role_id: roleId.id
  })

  await newUser.save();
  res.status(201).json({ newUser })
}

// update a user
exports.update = async (req, res, next) => {
  const user = await User.findById(req.param.id);
  user.firstName = req.body.firstName
  const u1 = await user.save()
  res.json(u1)
};

// delete a user
exports.deleteById = async (req, res, next) => {
  const user = await User.findByPk(req.params.id);
  await User.destroy({ where: { id: req.params.id } });
  res.status(200).json({ message: "Deleted Successfully" });
};
