//Objeto
let Persona = {
    nombre : "Nacho",
    edad : "20" ,
    ciudad : "Mendoza",
    //Metodo para cambiar ciudad
    cambiarCiudad : function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
    }

}
Persona.cambiarCiudad("San Juan");
console.log("Persona : ", Persona);