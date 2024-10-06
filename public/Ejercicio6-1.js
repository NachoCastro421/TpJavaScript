//Array con numeros del 1 al 10
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Array que almacena los resultados
const numerosMultiplicados = [];

//Bucle que multiplica cada numero por 2
for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}

console.log("Numeros originales :", numeros);
console.log("Numeros multiplicados :", numerosMultiplicados);