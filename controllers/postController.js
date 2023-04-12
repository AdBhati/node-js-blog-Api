const { uuidv4 } = require("sequelize");
const Post = require("../models/post")
// const User = require("../models/user")

exports.create = async (req, res, next) => {
    const { title, content } = req.body;
    const user_id = req.userId;
    const newPost = new Post({
        title,
        content,
        user_id
    });
    await newPost.save();
    res.status(201).json({ newPost })
}



