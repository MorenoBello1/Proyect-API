const consulta = require("../db/db");
const Metodo = require("../function/fuction");

exports.Register =  (req, res) => {
  const { usuario, contrasenia, idrol} = req.body;
  if (!usuario || !contrasenia) {
    res.status(404).send("Campos en el Body no fueron enviados");
    return;
  } else {

    let objeto = {   
      tabla: 'users',
      keys: `usuario = '${usuario}'`
    } 
    if(Metodo.ConsultarExistencia(consulta,objeto)){
      res.status(409).json({ mensaje: `El usuario ${usuario} ya existe` });
      return
    }

    const fechaCreacion = new Date();
    const query =
      "INSERT INTO users (fecha_creacion, usuario, contrasena,idrol) VALUES (?, ?, ?,?)";
    consulta.query(
      query,
      [fechaCreacion, usuario, contrasenia,idrol],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error en la consulta");
          return;
        }
        res.status(201).json("Usuario registrado exitosamente");
      }
    );
  }
};
