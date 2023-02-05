const Sequelize = require("sequelize");
const { ENV } = require("../utils/config");

const sequelize = new Sequelize (ENV.DB, ENV.USER, ENV.PASSWORD,{
    host:ENV.HOST,
    dialect: 'mysql'
});

module.exports={sequelize}