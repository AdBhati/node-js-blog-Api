const Like = require("../models/like")
const { uuidv4 } = require("sequelize")
const Post = require("../models/post");
const DisLike = require("../models/dislike");

exports.add = async (req, res, next) => {
    const { addLike } = req.body;
    const user_id = req.userId;
    console.log("==========>", user_id)
    const post_id = req.params.id;
    console.log("==========>", post_id)

    const checkDisLike = await DisLike.findOne({ where: { user_id, post_id } })
    if (checkDisLike) {
        await checkDisLike.destroy();
        // return res.status(400).json({ error: "Post is already disliked" });
        const newLike = new Like({
            addLike,
            user_id,
            post_id
        });
        await newLike.save();
        res.status(201).json({ newLike })

    }

    const existingLike = await Like.findOne({ where: { user_id, post_id } });
    console.log("-------->", post_id)
    if (existingLike) {
        return res.status(400).json({ error: "post got liked once only" })
    }

    console.log("-------Existing-Like-------->", existingLike);
    // const newLike = new Like({
    //     addLike,
    //     user_id,
    //     post_id
    // });
    // await newLike.save();
    // res.status(201).json({ newLike })
}
