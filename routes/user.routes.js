const { getUserList, createUser, editUserFromList, deleteUserFromList } = require("../controllers/usersList.controller");

const usersRoute=require("express").Router();

usersRoute.get('/usersList',getUserList);
usersRoute.post('/usersList',createUser);
usersRoute.put('/usersList',editUserFromList);
usersRoute.delete('/usersList/:id',deleteUserFromList);


module.exports={usersRoute}