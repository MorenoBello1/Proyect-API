const consulta = require("../db/db");
const Metodo = require("../function/fuction");

exports.Register = (req, res) => {
  const { usuario, contrasenia } = req.body;

  if (!usuario || !contrasenia) {
    res.status(404).send("Campos en el Body no fueron enviados");
    return;
  } else {
    const fechaCreacion = new Date();
    const query =
      "INSERT INTO users (fecha_creacion, usuario, contrasena) VALUES (?, ?, ?)";
    consulta.query(
      query,
      [fechaCreacion, usuario, contrasenia],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error en la consulta");
          return;
        }
        res.status(201).send("Usuario registrado exitosamente");
      }
    );
  }
};
