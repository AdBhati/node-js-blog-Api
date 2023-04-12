const Comment = require("../models/comment")
const { uuidv4 } = require("sequelize");
const Post = require("../models/post");

exports.create = async (req, res, next) => {
    const { message } = req.body;
    const user_id = req.userId;
    const post_id = req.params.id;
    console.log("post id===============>", post_id);

    const newComment = new Comment({
        message,
        user_id,
        post_id
    });
    await newComment.save();
    res.status(201).json({ newComment })
}