const { registerUser, loginUser } = require("../controllers/userHandler.controller");
const { getUserList, createUser, editUserFromList, deleteUserFromList } = require("../controllers/usersList.controller");

const usersRoute=require("express").Router();

//!USERLIST

usersRoute.get('/usersList',getUserList);
usersRoute.post('/usersList',createUser);
usersRoute.put('/usersList',editUserFromList);
usersRoute.delete('/usersList/:id',deleteUserFromList);

//!USER HANDLER

usersRoute.post('/user/login', loginUser)
usersRoute.post('/user/register', registerUser)



module.exports={usersRoute}