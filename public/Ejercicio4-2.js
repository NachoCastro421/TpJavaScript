
//Funciones
const convertirCelsiusAFahrenheit = (celsius) => {
    const fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
};

// Pruebas 
console.log("30 grados C son equivalentes a " + convertirCelsiusAFahrenheit(30)+ " grados F");    
