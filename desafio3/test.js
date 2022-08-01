const express = require('express');
const app = express();
const Container = require('./Container')
const nuevoProducto = new Container('producto.txt')

app.get('/productos', async (req, res) => {
    try {
        const productos = await nuevoProducto.getAll();
        res.send(productos);
    } catch (err) {
        res.send (err)
    }
})

app.get('/productosRandom', async (req, res) => {
    const data = await nuevoProducto.getAll()
    const random = Math.floor(Math.random() * data.length);
    res.send(await nuevoProducto.getById(parseInt(random + 1)))
})

const server = app.listen(8080, ()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en el servidor ${error}`));

//********** *//
