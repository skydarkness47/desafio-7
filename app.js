const express = require ('express')
const fs = require ('fs')
const app = express();
const port = 8080;
const users = []
var visitItem = 0;
var visitItemRamdon = 0;

app.get('/items',(req,res) =>{
    visitItem++
    let index = 0
    let data = fs.readFileSync(`./productos.txt`,'utf8')
    dato = JSON.parse(data)
    arr = new Array()
    res.write("items: \n")
    dato.forEach(element => {
        index++;
    
        res.write(` ${JSON.stringify(element)} \n`)
    });

   
    res.end(`LA CANTIDAD DE ELEMENTOS ES: ${index} \n`)
} )


app.get('/item-random',(req,res) =>{ 
   visitItemRamdon++
   let index = 0
   let data = fs.readFileSync(`./productos.txt`,'utf8')
   dato = JSON.parse(data)
   dato.forEach(element => {
       index++
   });
   
   let item = dato[~~(Math.random() * dato.length)];

   res.end(JSON.stringify(item))
})

app.get('/visitas',(req,res) =>{ 
    let datos = []

    datos.push(
        {
            "item1": visitItem,
            "item2": visitItemRamdon
        })
    res.write("Visitas: \n")
    res.write(JSON.stringify(datos))
    res.end()
 })
 

app.listen(port, () =>{

    console.log(port)

})