const Sequelize = require("sequelize");
const db = require("../util/database");
const Role = require("./role");

const User = db.define("user", {
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  firstName: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
});

User.belongsTo(Role, {
  foreignKey: 'role_id',
  targetKey: 'id'
})

module.exports = User;
