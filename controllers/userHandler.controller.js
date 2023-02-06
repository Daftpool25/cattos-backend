const { users } = require("../models/users.model");
let { response } = require("../utils/response");
const bcrypt =require("bcrypt")
const jwt =require ("jsonwebtoken");
const { ENV } = require("../utils/config");
const { info } = require("../utils/loggers");

const loginUser= async (req,res) => {
    const {email,password}=req.body;

    try {
         const user= await users.findOne({where:{email:email}}) ;

         if(user){
            const correctPassword = await bcrypt.compare(password,user.password);
            info(correctPassword)

            if(correctPassword){

                const userForToken={
                    username:user.username,
                    id:user.id
                }

                const token= jwt.sign(userForToken,ENV.SECRET);
                response={error:false,code:200, response:{user:user,token:token}}
                return res.send(response)

            }else{
                response={error:true,code:404, message:"Wrong password"}
                return res.send(response)
            }

         }else{
            response={error:true, code:401, message:"User doesn´t exist"}
            return res.send(reponse)
         }
    } catch (error) {
        response={error:true, code:500, message:error.message}
        return res.send(reponse)
    }

}

const registerUser =async (req,res) =>{
    info(req.body)
    const {name,lastname,email,password,passport,city,status,level,salary,skills,photo,cv} =req.body;

    try {
        const saltRounds=10;
        const passwordHash= await bcrypt.hash(password,saltRounds);
        

        const newUser =await users.create({
            name,
            lastname,
            email,
            password:passwordHash,
            passport,
            city,
            status,
            level,
            salary,
            skills,
            photo,
            cv
        })

        info(newUser);

        if(newUser){
            const userForToken={
                username:newUser.username,
                id:newUser.id
            }

            const token= jwt.sign(userForToken,ENV.SECRET);

            response={error:false, code: 200, message:{user:newUser,token:token}}
            return res.send(response)
        }



    } catch (error) {
        response={error:true, code: 500, message:error.message}
        return res.send(response)
    }
}

module.exports={loginUser,registerUser}