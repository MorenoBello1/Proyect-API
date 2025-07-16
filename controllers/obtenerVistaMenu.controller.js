const Metodo = require("../function/fuction");
const consulta = require("../db/db");

exports.vistaobt = (req, res) => {
  const { idusuario } = req.body;

  if (!idusuario) {
    res.status(404).send("Campos en el Body no fue enviado");
    return;
  } else {
    const query =
    `SELECT  u.usuario as usuario, vi.url as url, vi.nombre
        FROM menu as me
        INNER JOIN users as u ON u.id = me.idusuario
        INNER JOIN vistas as vi ON vi.id = me.idvista
        where u.id = ?`;
    consulta.query(
      query,
      [idusuario],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send("Error en la consulta");
          return;
        }
        res.json(result);
      }
    );
  }
};