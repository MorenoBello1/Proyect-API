const express = require("express");
const router = express.Router();
const controladorUser = require("../controllers/users.controllers")

router.get('/',controladorUser.getAllUsers)
router.get('/:id',controladorUser.getAllUsers)

module.exports = router