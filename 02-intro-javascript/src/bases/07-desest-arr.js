const personajes = ['Goku', 'Vegeta', 'Trunks'];

//F2 con el cursor sobre la variable, escribo nuevo valor y enter
//esto cambia el nombre en todas las referencias.
const[ , , p3 ]=personajes;
console.log(p3);

const retornoArreglo= ()=>{
    return ['ABC', 123];
}

const [letras, numeros]= retornoArreglo();
console.log(letras, numeros);

//Tarea
//1. el primer valor del arreglo se llamara nombre
//2. el segundo valor del arreglo se llamara setNombre
const useState = (valor)=>{
    return [valor, ()=>{console.log('Hola Mundo')}];
}
// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre();