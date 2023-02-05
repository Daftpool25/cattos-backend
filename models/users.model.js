const {Sequelize,DataTypes}= require("sequelize");
const { sequelize } = require("../database/dataBase");

const users=sequelize.define('users',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastname:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    passport:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    level:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    salary:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    skills:{
        type:DataTypes.STRING,
        allowNull:false
    },
    photo:{
        type:DataTypes.STRING,
        allowNull:true
    },
    cv:{
        type:DataTypes.STRING,
        allowNull:true
    }
})

module.exports={users}