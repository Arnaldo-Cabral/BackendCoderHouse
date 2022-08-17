const express = require('express')

const Contenedor = require('../api/productos.js')

const contenedor = new Contenedor('productos.txt')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

//Set engine
app.set('views', './views');
app.set('view engine', 'ejs');

//--------------------------------------------

app.post('/productos', (req, res) => {
    ; (async () => {
        const name = req.body.title;
        const price = Number(req.body.price);
        const url = req.body.thumbnail;

        const newProducto = {
            title: `${name}`,
            price: price,
            thumbnail: `${url}`
        };
        const id = await contenedor.save(newProducto);
        return res.redirect(`/`);
    })();
})

app.get('/productos', (req, res) => {
    let allProducts;
    ; (async () => {
        try {
            allProducts = await contenedor.getAll();
        } catch (err) {
            return res.status(404).json({
                error: `Error ${err}`
            });
        }
        data = {
            allProducts,
        };
        return res.render(`vista`, data);
    })();
});

//--------------------------------------------
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
