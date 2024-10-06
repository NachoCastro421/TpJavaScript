//Objeto
const libro = {
    titulo: 'El Quijote',
    autor: 'Cervantes',
    año: 1605,
    esAntiguo: function() {
        const añoActual = new Date().getFullYear();
        return añoActual - this.año > 10;
    }
};

// Determinar si el libro es antiguo o reciente
const esAntiguo = libro.esAntiguo();

console.log("El libro (El Quijote) es antiguo : " + esAntiguo);