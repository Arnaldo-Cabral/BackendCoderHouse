class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros,
        this.mascotas = mascotas;
    }

    getFullName () {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascotas (nombreMascota) {
        this.mascotas.push(nombreMascota);
    }

    countMascotas () {
        return this.mascotas.length
    }

    addBock (titulo, nombreAutor) {
        this.libros.push({nombre: titulo, autor: nombreAutor});
    }

    getBookName () {
        return this.libros.map( (libro) => libro.nombre)
    }
}

const libros = [
    {
        nombre: 'El señor de las moscas',
        autor : 'William Golding'
    },
    {
        nombre: 'Fundacion',
        autor: 'Isac Asimov' 
    } 
    
]

const usuarioRandom = new Usuario('Elon', 'Musk', libros, ['Perro', 'Gato', 'Hamster']);

console.log(usuarioRandom.getFullName());
console.log(usuarioRandom.getBookName());
console.log(usuarioRandom.countMascotas());

