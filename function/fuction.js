const jwt = require("jsonwebtoken")
class base{
  constructor(secret) {
    this.secret = secret || "clavetemporal";//aun sin clave no se si la usaremos
  }


   Gentoken(id,name){
      
      let token =  jwt.sign({
         sub:id,
         name:name,
         exp: Date.now() + 60 * 100000
      },this.secret)
      console.log(token,'token')
      return token

   }
   //verificas si se esta enviando en el header el token
   verifyToken (req, res, next) {
      const authHeader = req.headers.authorization;

      // Verificamos si viene el header
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
         return res.status(401).json({ error: "Token no proporcionado" });
      }

      const token = authHeader.split(" ")[1];

      try {
         const decoded = jwt.verify(token, "clavetemporal"); 
         req.user = decoded; // guardamos el usuario en el request
         next(); //  continuar con la siguiente función
      } catch (err) {
         return res.status(403).json({ error: "Token inválido o expirado" });
      }
   };
}


// const Gentoken = (id,name)=>{
//  let token = jwt.sign({
//     sub:id,
//     name:name,
//     exp: Date.now() + 60 * 1000
//  })
//  console.log(token,'generado tok')
//  return token
// }
   



module.exports = new base()