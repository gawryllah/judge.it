const Sequelize = require("sequelize");

const sequelize = new Sequelize("my-db", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
