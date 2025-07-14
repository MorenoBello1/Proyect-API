//hola soy sexo en db mysql? o maria madre de dios ruega por nosotroslos..
const mysql = require("mysql2");

let conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  //password: "proyecto123_",
  database: "proyect",
});

conexion.connect((err) => {
  if (err) console.log(err);
  else {
    console.log("Conectado a mysql");
  }
});

module.exports = conexion;
