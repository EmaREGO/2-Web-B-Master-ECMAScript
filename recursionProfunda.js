const cajaNavidena = [
    "Rompecabezas",
    ["Lego", "Carro de juguete"], 
    "Pelota",
    ["Muñeca", ["Videojuego", "Control"]]
];

function searchInBoxes(content, objective, level = 1, path = "Caja Principal"){
    for (let i = 0; i < content.length; i++) {
        let element = content[i];

        if (element === objective) {
            return `${objective} ha sido encontrado en el nivel ${level}. Ruta: ${path}`;
        } 
        else if (Array.isArray(element)) {
            let newPath = path + " > " + "Caja " + (i + 1);
            let result = searchInBoxes(element, objective, level + 1, newPath);
            
            if (result !== "No se encontró el regalo.") {
                return result;
            }
            
        }
    }
    return "No se encontró el regalo.";
}

console.log(searchInBoxes(cajaNavidena, "Control"));