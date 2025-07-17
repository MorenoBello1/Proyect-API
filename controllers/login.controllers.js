const Metodo = require("../function/fuction");
const consulta = require("../db/db");

exports.Login = (req, res) => {
  const { id, contrasena } = req.body; //obtienes el body
  if (!id || !contrasena) {
    res.status(404).send("Campos en el Body no fueron enviados");
    return;
  } else {
    // conexion.query(`select * from users where usuario = '${id}' and contrasena ='${contrasena}'`, (err, result) =>{
    const query =  `SELECT u.id,u.usuario,rol.nombre_rol as rol, rol.id as idrol
                    FROM users as u 
                    INNER JOIN rol  ON rol.id = u.idrol 
                    WHERE usuario = ? AND contrasena = ?`
    consulta.query(query, [id, contrasena], (err, result) => {
      if (err) return console.log(err, "error");

      if (!result.length) {
        res.send("Usuario o contraseña Incorrecta");
      } else {
        console.log(result[0]);
        let Token = Metodo.Gentoken(id, contrasena); //genera token
        res.json({ Token:Token, user:result[0]});
      }
    });
  }
};
