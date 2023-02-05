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
app.use(usersRoute) //probable error

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

/*
let newUser={
    name:"", 
    lastname:"",
    email:"", 
    passport:"",
    city:"",
    status:"",
    level:"",
    salary:"",
    startDate:now, 
    skills:"", 
    photo:"", 
    cv:""
}




//!ROOT
app.get('/', (req,res)=> {
    res.send(
        response={
            error:false,
            code:200,
            message:"Server online"
        }
    )

})


//! USERS CRUD

app.get('/API/usersList', (req,res)=> {
    connection.query('SELECT * FROM profiles', function (err, results, fields) {
        if(err){
            throw err
        }
        usersListReference=results;
        response={
                error: false,
                code:200,
                message: 'Request success',
                response:results};

        res.send(response)
    })
})

app.post('/API/usersList', (req,res) => {
    if(    !req.body.name
        || !req.body.lastname
        || !req.body.email
        || !req.body.passport
        || !req.body.city
        || !req.body.salary
        || !req.body.skills
        || !req.body.photo
        || !req.body.cv
        ){
            response={
                error:true,
                code:502,
                message:"Error BAD GATEWAY"
            }
        }else if (
            req.body.name === ""
            || req.body.lastname === ""
            || req.body.email === ""
            || req.body.passport === ""
            || req.body.city === ""
            || req.body.salary === ""
            || req.body.skills === ""
            || req.body.photo === ""
            || req.body.cv === ""
        ){
            response={
                error:true,
                code:502,
                message:'Fields are required'
            }
        }else{
            const sameUser= usersListReference.filter((item) =>{ item.email === req.body.email});
            if(sameUser.length >0){
                response={
                    error:true,
                    code:503,
                    message:'User Already exist',
                }
            }else{
                newUser={
                    name:req.body.name, 
                    lastname:req.body.lastname,
                    email:req.body.email, 
                    passport:req.body.passport,
                    city:req.body.city,
                    status:1,
                    level:1,
                    salary:req.body.salary,
                    startDate:now, 
                    skills:req.body.skills, 
                    photo:req.body.photo, 
                    cv:req.body.cv
                }

                connection.query('INSERT INTO profiles (name, lastname, email, passport, city, status,level, salary, startDate, skills, photo, cv) values (?,?,?,?,?,?,?,?,?,?,?,?)',
                [newUser.name,newUser.lastname,newUser.email,newUser.passport,newUser.city,newUser.status,newUser.level,newUser.salary, newUser.startDate, newUser.skills,newUser.photo, newUser.cv],
                function (error, results, fields) {
                    if(error){
                        console.log(error); 
                        response={
                            error:true,
                            code:500,
                            message:"DATABASE error: "+error}
                    }
                    else{
                        console.log(result.insertId);
                        response={
                            error:false,
                            code:200,
                            message:'User has been created on:'+ (results.insertId),
                            response:newUser}
                        }
                    }
                )
            }
        }

        res.send(response);
})

app.put('/API/usersList', (req,res)=> {
    if(    !req.body.name
        || !req.body.lastname
        || !req.body.email
        || !req.body.passport
        || !req.body.city
        || !req.body.salary
        || !req.body.skills
        || !req.body.photo
        || !req.body.cv
        || !req.body.userID
        ){
            response={
                error:true,
                code:502,
                message:"ERROR Bad Gateway"
            }
        }
        else if(
            !req.body.name === ""
            || !req.body.lastname === ""
            || !req.body.email === ""
            || !req.body.passport === ""
            || !req.body.city === ""
            || !req.body.salary === ""
            || !req.body.skills === ""
            || !req.body.photo === ""
            || !req.body.cv === ""
            || !req.body.userID
        ){
            response={
                error:true,
                code:503,
                message:"Fields are required"
            }
        }else{

                newUser={
                    name:req.body.name, 
                    lastname:req.body.lastname,
                    email:req.body.email, 
                    passport:req.body.passport,
                    city:req.body.city,
                    status:req.body.status,
                    level:req.body.level,
                    salary:req.body.salary,
                    startDate:req.body.startDate, 
                    skills:req.body.skills, 
                    photo:req.body.photo, 
                    cv:req.body.cv
                }

            connection.query('UPDATE profiles SET name: ? , lastname: ? , email: ? , passport: ? , city: ? , status: ? ,level: ? , salary: ? , startDate: ? , skills: ? , photo: ? , cv: ?  WHERE id=?',
            [newUser.name,newUser.lastname,newUser.email,newUser.passport,newUser.city,newUser.status,newUser.level,newUser.salary, newUser.startDate, newUser.skills,newUser.photo, newUser.cv, req.body.userID],
            function (error,results,fields) {
                if(error){
                    response={
                        error:true,
                        code:500,
                        message:"DATABASE error: "+error}
                }else{
                    console.log(result.insertId);
                    response={
                        error:false,
                        code:200,
                        message:'User has been modified on the row:'+ (results.changedRows),
                        response:newUser}
                    
                }
            })
        }
    res.send(response)
})

app.delete('/API/usersList', (req,res) => {
    if(!req.body.userID){
        response={
            error:true,
            code:502,
            message:"ERROR Bad Gateway"
        }
    }else if(req.body.userID===""){
        response={
            error:true,
            code:503,
            message:"User ID is required"
        }
    }else{
        connection.query('DELETE FROM profiles WHERE email= ?',[req.body.userID],
        function (error, results, fields) {
            if(error){ 
                response={
                    error:true,
                    code:502,
                    message:"DATABASE error: "+error
                }
            }else{
                response={
                    error:false,
                    code:200,
                    message:results.affectedRows 
                }
            }
        })
    }
    res.send(response)
})


*/