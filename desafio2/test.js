const Container = require('./Container')
const nuevoProducto = new Container('producto.txt')

async function test(){
    const newProduct = {
        title: `Producto`,
        price: 123,
        thumbnail: `https://google.com`
    };
    await nuevoProducto.save(newProduct);
    console.log('creaste el array []')

    let getById = await nuevoProducto.getById(1);
    console.log (`Seleccionaste el id ${getById.id}`)

    console.table(await nuevoProducto.getAll());    
    console.log ('Muestra todos los productos')

    await nuevoProducto.deleteById(4);
    //let deleteById = await nuevoProducto.deleteById(4);
    console.log ('eliminaste el Id 4')

    await nuevoProducto.deleteAll();
    console.log (`eliminsate todos los productos`)
    
}

test()

