let frutas = ['fresa', 'durazno', 'kiwi']

frutas.forEach( (elemento, indice) => {
    console.log({elemento, indice })
})


// Unshift inserta un elemento al inicio del arreglo

frutas.unshift('naranja')

console.log(frutas)

// Eliminar un elemento en determinada posicion del arreglo
//Primer posicion elemento
//Segundo numero de elementos por borrar
frutas.splice(1, 2)

console.log(frutas)

// Devolver el indice de cierto elemento dentro del arreglo
var pos = frutas.indexOf('naranja')

console.log(pos)
