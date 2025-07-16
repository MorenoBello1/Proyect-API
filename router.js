const express = require("express");
const Users = require("./routers/users");
const Login = require("./routers/login");
const Register = require("./routers/register");
const Metodo = require("./function/fuction"); //funciones
const Vistaob = require("./routers/vistamenu") 

const router = express.Router();
//aqui van las rutas
router.use("/login", Login);
router.use("/register", Register);
router.use("/users", Metodo.verifyToken, Users); //se ejecutan dependiendo el orden de los metodos.
router.use("/obtenvista", Metodo.verifyToken, Vistaob);


module.exports = router;
