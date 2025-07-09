const express = require("express");
const Users = require("./users")
const router = express.Router()
//aqui van las rutas 
router.use("/users",Users)

module.exports = router