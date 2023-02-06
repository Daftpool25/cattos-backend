//!DEPENDENCIES
const express =require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const user =require("./models/users.model")
const { ENV } = require('./utils/config');
const { sequelize } = require('./database/dataBase');
const { usersRoute } = require('./routes/user.routes');

//CONST
const app=express(); 

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(usersRoute) 

//! SEQUELIZE CONNECTION

async function main() {
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
main()

app.listen(ENV.PORT, () => {
    console.log("CATTOS server is listenning...")
})
