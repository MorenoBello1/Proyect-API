const express = require("express");
const routing =  require("./router")
const app = express();
const port = 3000;

app.use(express.json())
app.use('/',routing)

//middleware si no encuentra ninguna ruta
app.use((req,res)=>{
  res.status(404).send('TOMA PICHAAA')
})

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
