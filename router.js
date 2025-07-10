const express = require("express");
const Users = require("./routers/users")
const Login = require("./routers/login")
const Metodo = require("./function/fuction")//funciones 

const router = express.Router()
//aqui van las rutas 
router.use("/login",Login) 
router.use("/users",Metodo.verifyToken, Users)  //se ejecutan dependiendo el orden de los metodos.

module.exports = router
