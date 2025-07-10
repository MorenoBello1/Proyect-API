
const Metodo = require("../function/fuction")

exports.Login = (req, res) => {
  const {id,contrasena} = req.body; //obtienes el body
    if(!id || !contrasena){
      res.status(404).send('Campos en el Body no fueron enviados');
      return;
    }

    let Token = Metodo.Gentoken(id,contrasena) //genera token
    res.json({ Token }); 
};