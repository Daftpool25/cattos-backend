const { users } = require("../models/users.model");
const {info} =require("../utils/loggers");
let { response } = require("../utils/response");

const getUserList = async (req,res) => {
    try {
        const usersList= await users.findAll()
        return res.send(usersList);

    } catch (error) {
        info(error);
        response={
            error:true,
            code:500,
            message:error.message
        }
        return response;
    } 
}

const createUser = async (req,res) => {
    try {
        info(req.body)

        const {name,lastname,email,passport,city,status,level,salary,skills,photo,cv}=req.body;
        const newUser =users.create({
            name,
            lastname,
            email,
            passport,
            city,
            status,
            level,
            salary,
            skills,
            photo,
            cv
        })

        info(newUser)

        response={error:false, code: 200, message:"Success!"}
        return res.send(response)

    } catch (error) {
        response={error:true, code: 500, message:error.message}
        return res.send(response)
    }
}

const editUserFromList = async (req,res) =>{
    try {
        //slect only a valuer to edit
        const {name,lastname,email,passport,city,status,level,salary,skills,photo,cv}=req.body;
        const user= await users.findOne({where:{email:email}})

            user.name=name
            user.lastname=lastname
            user.email=email
            user.passport=passport,
            user.city=city,
            user.status=status,
            user.level=level,
            user.salary=salary,
            user.skills=skills,
            user.photo=photo,
            user.cv=cv

        info(user);
        await user.save()

        response={error:false, code: 200, message:user}
        return res.send(response)

    } catch (error) {
        response={error:true, code: 500, message:error.message}
        return res.send(response)
    }
}

const deleteUserFromList = async (req,res) =>{

    const id =req.params.id

    try {

        const user = await users.destroy({where:{id}})

        info(user);
        response={error:false, code: 200, message:"Success!"}
        return res.send(response)

    } catch (error) {
        response={error:true, code: 500, message:error.message}
        return res.send(response)
    }
}

module.exports={getUserList, createUser, editUserFromList, deleteUserFromList}