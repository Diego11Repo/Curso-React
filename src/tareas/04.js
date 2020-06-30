// Tarea
// 1.- El primer valor del arr se llamará nombre
// 2.- Se llamará setNombre

const useState = ( valor ) => {
  return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [nombre, setNombre] = useState( 'Goku' );

console.log( nombre );
setNombre();