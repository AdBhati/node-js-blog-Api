const Sequelize = require("sequelize")
const db = require("../util/database")
const User = require("./user")
const Post = require("./post")

const Comment = db.define("comment", {

    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    message: Sequelize.STRING
});

Comment.belongsTo(Post, {
    foreignKey: "post_id",
    targetKey: "id"
})

Comment.belongsTo(User, {
    foreignKey: "user_id",
    targetKey: "id"
})

module.exports = Comment;


