const express = require('express');
//utilizando express en forma local
const app = express();
//varias paginas

let visitas = 0;

app.get('/', (req, res) =>{
    res.send('<h1 style="color:blue";>Bienvenidos al servidor express</h1>');
})  //endpoint o servicio

app.get('/visitas', (req, res) =>{
    visitas +=1
    res.send(`La cantidad de visitas es: ${visitas}`);//contador de visitas
})

app.get('/fyh', (req, res) =>{
    const date = new Date
    res.send(date.toLocaleString());//devuelve fecha y hora
})

const server = app.listen(8080, ()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en el servidor ${error}`));