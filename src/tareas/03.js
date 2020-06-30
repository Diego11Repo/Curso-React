const persona = {
  nombre: 'Tony',
  edad: 42,
  clave: 'Ironman',
}

const useContext = ({clave, nombre, edad, rango}) => {
  return {
    nombre,
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 756765,
      lng: 6.898,
    },
  };
}

const {nombre, anios, latlng:{lat, lng}} = useContext( persona );
console.log(nombre, anios, lat, lng);