const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

//Encadenamiento de metodos
const resultado  = productos

// Filter
.filter(producto => producto.precio < 100) // Productos que cuesten menos de 100
// Sort
.sort((a,b) => a.nombre.localeCompare(b.nombre)) //localeComare compara strings correctamente y ordenamos alfabeticamente
// Map
.map(producto => producto.nombre) // Devuelve solo el nombre del producto

console.log('Resultados de usar los metodos Filter, Sort y Map')
console.log(resultado)