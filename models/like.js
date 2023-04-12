const Sequelize = require("sequelize");
const db = require("../util/database");
const User = require("./user")
const Post = require("./post")

const Like = db.define("like", {

    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    addLike: Sequelize.STRING
});

Like.belongsTo(Post, {
    foreignKey: "post_id",
    targetKey: "id"
})

Like.belongsTo(User, {
    foreignKey: "user_id",
    targetKey: "id"
})

module.exports = Like;
