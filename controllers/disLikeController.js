const DisLike = require("../models/dislike")
const { uuidv4 } = require("sequelize")
const Post = require("../models/post")
const Like = require("../models/like")

exports.add = async (req, res, next) => {
    const { addDislike } = req.body;
    const user_id = req.userId;
    const post_id = req.params.id;

    const checkLike = await Like.findOne({ where: { post_id, user_id } })
    if (checkLike) {
        await checkLike.destroy();
    }
    const newDisLike = new DisLike({
        addDislike,
        user_id,
        post_id
    });
    await newDisLike.save();
    res.status(201).json({ newDisLike })
    // return res.status(400).json({ error: "post is already liked" });


    const existingDisLike = await DisLike.findOne({ where: { user_id, post_id } });
    if (existingDisLike) {
        return res.status(400).json({ error: "post got disliked once only" })
    }
    // const newDisLike = new DisLike({
    //     addDislike,
    //     user_id,
    //     post_id
    // });
    // await newDisLike.save();
    // res.status(201).json({ newDisLike })
}

