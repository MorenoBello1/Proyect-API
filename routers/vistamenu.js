const express = require("express");
const router = express.Router();
const controladorObVistas = require("../controllers/obtenerVistaMenu.controller");

router.post("/", controladorObVistas.vistaobt);
module.exports = router;

