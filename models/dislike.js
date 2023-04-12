const Sequelize = require("sequelize");
const db = require("../util/database");
const User = require("./user");
const Post = require("./post");

const DisLike = db.define("disLike", {

    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    addDislike: Sequelize.STRING
});

DisLike.belongsTo(Post, {
    foreignKey: "post_id",
    targetKey: "id"
})

DisLike.belongsTo(User, {
    foreignKey: "user_id",
    targetKey: "id"
})

module.exports = DisLike;