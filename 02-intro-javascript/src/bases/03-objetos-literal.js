const persona = {
    nombre: "Mia",
    apellido: "Ramos",
    edad: 25,
    direccion: {
        ciudad: "Avellaneda",
        zip: "b3333",
        lat: -12.12,
        lng: -12.12,
    }
};

//console.table(persona);


const persona2 = {...persona};
persona2.nombre = "Peter";
console.log(persona);
console.log(persona2);