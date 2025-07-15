const express = require("express");
const router = express.Router();
const controladorRegister = require("../controllers/register.controller");

router.post("/", controladorRegister.Register);
module.exports = router;
