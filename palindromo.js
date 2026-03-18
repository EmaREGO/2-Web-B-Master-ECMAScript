function encontrarPalindromo(palabra) {
    let izquierda = 0;
    let derecha = palabra.length -1;

    while (izquierda < derecha){
        //Comparar cada caracter del lado izquierdo con el caracter del lado derecho
        if(palabra[izquierda] !== palabra[derecha]){
            return false;
        }
        //SI coinciden mover punteros de izquierda hacia derecha
        izquierda++
        //El derecho retrocede hacia la izquieda
        derecha--;
    }
    //Encontrado que si es Palindromo
    return true;
}

let resultado = "abcacba";
console.log(encontrarPalindromo(resultado));