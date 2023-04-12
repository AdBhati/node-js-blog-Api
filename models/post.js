const Sequelize = require("sequelize");
const db = require("../util/database");
const User = require("./user");

const Post = db.define("post", {

    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    title: Sequelize.STRING,
    content: Sequelize.STRING,
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    targetKey: 'id'
})

module.exports = Post;
