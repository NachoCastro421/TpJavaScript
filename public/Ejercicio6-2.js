//Array vacio
const pares = [];

//Bucle que agrega los primeros 10 numeros pares
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
    // Detener el bucle después de agregar 10 números pares
    if (pares.length === 10) {
        break;
    }
}

console.log("Primeros 10 numeros pares : ", pares);