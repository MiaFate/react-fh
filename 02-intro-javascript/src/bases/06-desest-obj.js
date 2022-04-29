// Desestructuracion
//asignacion desestructurante
//https://developer.mozilla.org/es/docs/web/javascript/reference/operators/destructuring_assignment
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado'
};

//const { nombre: nombre2, edad, clave } = persona;

/* console.log( nombre2 );
console.log( edad );
console.log( clave); */

const useContext = ({clave,nombre,edad, rango='capitan'}) => {
    
    //console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        años: edad,
        lating:{
            lat: 10341,
            lng: -56446
        }
    }
};
// eslint-disable-next-line react-hooks/rules-of-hooks
const {nombreClave, años, lating:{lat,lng}} = useContext(persona);
console.log(nombreClave, años);
console.log(lat,lng);
//asd