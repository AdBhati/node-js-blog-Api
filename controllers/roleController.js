const Role = require("../models/role");
const { v4: uuidv4 } = require("uuid");

exports.create = async (req, res, next) => {
    const { name } = req.body;

    const existingRole = await Role.findOne({ where: { name: name } });

    if (existingRole) return res.status(400).json({ error: "role already exists" });
    const newRole = new Role({
        name,
    });
    await newRole.save();
    return res.status(200).json("roleCreated")
};