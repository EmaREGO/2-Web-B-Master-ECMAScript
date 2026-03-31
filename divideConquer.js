/* 
Dado un arreglo de números, implementa una función que utilice 
el enfoque Divide and Conquer para encontrar el número máximo.
*/
function findMax(arr,low = 0, high = arr.length - 1) {
    // TODO: Agregar la condición del caso base
    if (arr.length === 0) {
        return "Agregue un valor";
    }
    if (low === high) {
        return arr[low];
    }

    // TODO: Dividir el arreglo en dos mitades
    const mid = Math.floor((low + high) / 2);

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(arr, low,mid);
    const rightMax = findMax(arr, mid+1, high);

    return Math.max(leftMax, rightMax);
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10

