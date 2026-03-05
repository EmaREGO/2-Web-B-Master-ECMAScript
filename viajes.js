// viajes.js

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte, numPersonas = 1) => { //Exportar funciones para que app.js la vea
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        numPersonas,
        costo: calcularCosto(destino, transporte, numPersonas)
    };

    destinos.push(nuevoViaje);
}

export const calcularCosto = (destino, transporte, numPersonas = 1) => {
    let costoBase = 0;

    if (destino === "Paris") costoBase = 500;
    else if (destino === "Londres") costoBase = 400;
    else if (destino === "New York") costoBase = 600;
    
    // Costo adicional por tipo de transporte
    if (transporte === "Avión") costoBase += 200;
    else if (transporte === "Tren") costoBase += 100;

    let total = costoBase * numPersonas;
    if (numPersonas >= 3) total = total * 0.90;
    
    
    return total;
}

// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => {
    destinos.forEach(viaje => {
        console.log(`Destino: ${viaje.destino}`);
        console.log(`Fecha: ${viaje.fecha}`);
        console.log(`Transporte: ${viaje.transporte}`);
        console.log(`Total de personas ${viaje.numPersonas}`);
        console.log(`Costo: ${viaje.costo}`);
        console.log("---------------------------");
    });
}