function findLongestWord(text) {

    // TODO: Dividir el texto en palabras y almacenarlas en una variable
    // const words = ...
    const cleanText = text.replace(/[.,]/g, "");
    const words = text.split(" ");

    let longestWords = []; // Inicializar la palabra más larga
    let maxLength = 0;
    // TODO: Recorrer el arreglo de palabras con un ciclo
    for (let word of words){
        // TODO: Comparar la longitudword de la palabra actual con la más larga
        if (word.length > maxLength){
            //Si es mas larga se pasa a la variable como mas larga
            maxLength = word.length;
            longestWords = [word];
        } else if (word.length === maxLength){
            longestWords.push(word);
        }
    }
    // TODO: Retornar la palabra más larga encontrada
    return longestWords;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender, de igual manera es interesante.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"