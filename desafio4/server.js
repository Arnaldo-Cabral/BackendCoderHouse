const express = require(`express`);
const { Router } = express;

const Contenedor = require(`./api/productos.js`);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`public`));

const productosRouter = Router();
app.use(`/api/productos`, productosRouter);

const contenedor = new Contenedor('productos.txt');

//*******************************************//
//*******************************************//

// get productos devuelve todos los productos    
productosRouter.get(``, (req, res) => {
    ; (async () => {
        try {
            let allProducts = await contenedor.getAll();
            return res.json(allProducts);
        } catch (err) {
            return res.status(404).json({
                error: `Error ${err}`
            });
        }
    })();
});

// get productos byId devuelve productos segun id ej /2
productosRouter.get(`/:id`, (req, res) => {
    ; (async () => {
        try {
            let productbyId = await contenedor.getById(req.params.id);
            if (productbyId.length == 0) {
                return res.status(404).json({
                    error: `Error producto no encontrado`
                });
            } else {
                return res.json(productbyId);
            }
        } catch (err) {
            return res.status(404).json({
                error: `Error ${err}`
            });
        }
    })();
});

// add product recibe y agrega un productos mas id
productosRouter.post(``, (req, res) => {
    ; (async () => {
        const name = req.body.nombre;
        const price = Number(req.body.precio);
        const url = req.body.url;

        const newProducto = {
            title: `${name}`,
            price: price,
            thumbnail: `${url}`
        };
        const id = await contenedor.save(newProducto);

        return res.json(`El id asignado es ${id}`);
    })();
});

// modificar producto byId
productosRouter.put(`/:id`, (req, res) => {
    ; (async () => {
        const id = Number(req.params.id);
        let allProducts = await contenedor.getAll();
        const productIndex = allProducts.findIndex(product => product.id === id);

        if (productIndex < 0) {
            return res.status(401).json({
                error: "producto no encontrado"
            });
        }

        allProducts[productIndex].title = req.body.title;
        allProducts[productIndex].price = req.body.price;
        allProducts[productIndex].thumbnail = req.body.thumbnail;

        await contenedor.write(allProducts, `Mensaje modificado`);
        return res.json(`Se actualizó el id ${id}`);
    })();
});

// delete product byId
productosRouter.delete(`/:id`, (req, res) => {
    ; (async () => {
        try {
            const id = Number(req.params.id);
            await contenedor.deleteById(id);

            return res.json(`Se eliminó de forma correcta el ID:${id}`);
        } catch (err) {
            return res.status(404).json({
                error: `Se detecto un error --> ${err}`
            });
        }
    })();
});

//*******************************************//
//*******************************************//

//Server
const PORT = 8080;

const server = app.listen(PORT, () => {
    console.log(`Servidor HHTP escuchando puerto ${server.address().port}`);
});

server.on(`error`, err => {
    console.log(`error en el servidor ${err}`);
});
