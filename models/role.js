const Sequelize = require("sequelize");
const db = require("../util/database")

const Role = db.define("role", {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        required: true,
        enum: ["ADMIN", "USER", "SUPER_ADMIN"]
    }
});

module.exports = Role;