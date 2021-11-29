let personaje = {
    nombre: 'Tony Stark',
    heroName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.04,
        long: 35.05
    },
    trajes: ['Mark I', 'Mark V', 'HulkBuster'],
    'ultima pelicula': 'Infinity War'
}

console.log(personaje['ultima pelicula'])

const entriesPares = Object.entries(personaje)


console.log(entriesPares)


// Para dejar de insetar elementos agregar un Object.freeze
personaje.casado = true
console.log(personaje)
Object.freeze(personaje)
personaje.dinero = 10000
console.log(personaje)

const propiedades = Object.getOwnPropertyNames(personaje)
const valores = Object.values(personaje)
console.log({propiedades, valores})