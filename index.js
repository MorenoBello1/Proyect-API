const express = require("express");
const routing =  require("./router")
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors()); 
app.use(express.json())
app.use(cors()); 

app.use('/',routing)
//middleware si no encuentra ninguna ruta
app.use((req,res)=>{
  res.status(404).send('TOMA PICHAAA')
})

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
