// Un arreglo puede tener cualquier tipo de datos en js
//Preferentemente uso de const 
const listaDeCompras = ['leche', 'huevos', 'pan', 'tortillas'] //Const reduce errores, 

// Se pueden mezclar tipos
const mezcla = ['Ariel', 23, true, false, {rol: 'estudiante'}, ['sublista']]

//Imprimir el arreglo para ver el contenido
console.log(listaDeCompras)
console.log(mezcla)

// Aunque usemos const podemos modificar el contenido del arreglo
listaDeCompras.push('mantequilla') //Agregar un elemento al final
//NO se puedde reasignar la referencia
console.log(listaDeCompras)

//Usar Let solo si se va a reemplazar el arreglo completo
let numeros = [1,3,67,30]
numeros = [1,2,3,4,5,35,8,10,45]
console.log(numeros)

//Indice
console.log(mezcla[1]);
//Si accedemos a un elemento que no existe, nos entrega un undefined
console.log(mezcla[78]); //Regresa undefined
//Cuantos elementos tenemos
console.log(mezcla.length);
// Acceder al ultimo elemento
console.log(mezcla[mezcla.length -1]);

const frutas = ['pera', 'papaya', 'sandia', 'melon']

for(let i = 0; i < frutas.length; i++) {
    console.log('Indice: ', i + 1, 'Valor: ', frutas[i])
}

frutas.unshift('cereza') // Agregar al inicio del arreglo
frutas.unshift('lulo') 
console.log(frutas)
frutas.shift() //Quitar elemento del inicio
console.log(frutas)

frutas.pop() //Quitar el ultimo elemento
console.log(frutas)

const usuarios = [
    {id: 1, nombre: 'Ana'},
    {id: 2, nombre: 'Fernanda'},
    {id: 3, nombre: 'Erick'},
    {id: 4, nombre: 'Misael'}
]

//El metodo find() sirve para encontrar el primer elemento que cumpla con una condicion
// Usarlo cuando necesitemos una sola cosa
const encontrado = usuarios.find((u) => u.id ==2) //u de usuarios 
console.log(encontrado)

// El metodo filter() crea un arreglo con los elementos que cumplen una condicion
// No modifica el arreglo original
const pares = numeros.filter((n) => n % 2 === 0); //n de numeros
console.log("Original: ", numeros); //Find gasta menos tiempo
console.log("Copia de pares: ", pares);

//El metodo map() tengo un producto y quiero agregarles a todos el iva, pero sin afectar el original
//Crea un nuevo arreglo pero con el resultado de aplicar una funcion
const precios = [100, 200, 300, 400, 500]
const preciosConIba = precios.map((p) => {
    const iba = p * 0.16;
    const total = p + iba;
    return total; //Esto se guarda en el nuevo arreglo
});

console.log("Original: ", precios)
console.log("Con IBA: ", preciosConIba )

// El metodo forEach() Ejecuta una funcion una vez por cada elemento, no lo transforma
//No es para construir un nuevo arreglo
const apellidos = ['Villanueva', 'Velazquez', 'Serrano']
apellidos.forEach((apellido, index) => {
    console.log("Posicion: ", index, "Apellido: ", apellido); 
});

// El metodo some() nos va a decir si existe AL MENOS un elemento que cumpla con la condicion
const apellidosNuebos = apellidos.some((a) => a === 'Serrano');
console.log(apellidosNuebos);

// El metodo every() es si todos cumplen
// El metodo sort() ordena (y normalmente muta)