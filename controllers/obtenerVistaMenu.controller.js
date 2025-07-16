const Metodo = require("../function/fuction");
const consulta = require("../db/db");

exports.vistaobt = (req, res) => {
  const { idusuario } = req.body;

  if (!idusuario) {
    res.status(404).send("Campos en el Body no fue enviado");
    return;
  } else {
    const query =
    `SELECT  u.usuario as usuario, vi.url as url, vi.nombre, vi.idpadre, me.idvista
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

        if (result.some(e => e.idpadre)) { // si tiene detalle padre 

          let arrayvistahijo = result.filter(e => e.idpadre); //filtramos en nuevo array solo los que tiene padre
          result.forEach(e => {
            e.listmenu = []; 

            if (arrayvistahijo.some(x => e.idvista === x.idpadre)) {// si coinciden creamos listmenu y se lo insertamos
              e.listmenu = arrayvistahijo.filter(x => x.idpadre === e.idvista);
            }
          });
          //esto es para elimnar el extra del que tenia padre por que ese debeeria estar dentro ya de el array 
          result = result.filter(e=>!e.idpadre || e.idpadre==null)
        }
        res.json(result);
      }
    );
  }
};