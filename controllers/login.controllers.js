const Metodo = require("../function/fuction");
const consulta = require("../db/db");

exports.Login = (req, res) => {
  const { id, contrasena } = req.body; //obtienes el body
  if (!id || !contrasena) {
    res.status(404).send("Campos en el Body no fueron enviados");
    return;
  } else {
    // conexion.query(`select * from users where usuario = '${id}' and contrasena ='${contrasena}'`, (err, result) =>{
    const query = "SELECT * FROM users WHERE usuario = ? AND contrasena = ?"; //segun gpt de esta manera evita sqlInjection , sirve para buena practica
    consulta.query(query, [id, contrasena], (err, result) => {
      if (err) return console.log(err, "error");

      if (!result.length) {
        res.send("Usuario o contraseña Incorrecta");
      } else {
        console.log(result[0]);
        let Token = Metodo.Gentoken(id, contrasena); //genera token
        res.json({ Token });
      }
    });
  }
};
