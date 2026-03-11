// Proyecto Estructuras de Datos
// Crea un arreglo vacío llamado listaDeCompras.
const listaDeCompras = []; 

// Implementa una función agregarProducto(producto) que agregue un nuevo producto al final de la lista.
export const agregarProducto = (producto) => {
    if (listaDeCompras.includes(producto.toLowerCase())) {
        console.log(`El producto "${producto}" ya está en la lista.`);
        return;
    }
    listaDeCompras.push(producto.toLowerCase());
    console.log(`"${producto}" agregado.`);
};

// Implementa una función eliminarProducto(producto) que elimine un producto de la lista.
export const eliminarProducto = (producto) => {
    const indice = listaDeCompras.indexOf(producto.toLowerCase());

    if (indice !== -1){
        listaDeCompras.splice(indice, 1);
        console.log(`"${producto}" eliminado.`);
    } else {
        console.log(`No se encontró "${producto}" en la lista.`);
    }
};

//Implementa una función mostrarLista() que imprima todos los productos de la lista.
export const mostrarLista = () => {
    console.log("--Lista de productos--")
    if (listaDeCompras.length === 0) {
        console.log("No hay productos");
    } else{
        listaDeCompras.forEach((prod, i) => console.log(`${i + 1}. ${prod}`))
    }
};