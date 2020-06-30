// function getUsuarioActivo( nombre ) {
//   return {
//     uid: 'ABC567',
//     username: nombre,
//   }
// };

// const usuarioActivo = getUsuarioActivo('Fernando');
// console.log( usuarioActivo );

const getUsuarioActivo = ( nombre ) => ({
  uid: 'ABC567',
  username: nombre,
})

const usuarioActivo = getUsuarioActivo( 'Diego' );
console.log(usuarioActivo);