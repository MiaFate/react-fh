//funciones en JS
const saludar = function (nombre) {
    return `Hola ${nombre}`;
}
const saludar2 = (nombre) => {
    return `Hola ${nombre}`;
}
const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola Mundo`;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Gohan'));
console.log(saludar4());

const getUser = () =>
({
    uid: 'ABC123',
    username: 'El_Papi1502'
})
const user = getUser();
console.log(user);

//tarea
//transforme a una fubcion flecha
//tiene que retornar un objetyo implicito
//pruebas
const getUsuarioActivo = (nombre) =>
({
    uid: 'ABC567',
    username: nombre
})

//asad
const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);