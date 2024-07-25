/* 

for (let i= 1; i<=10; i++) {
    alert(i)} */

/* 
function obtenerNumero ()
{
    let numero = prompt('ingrese un numero');
    while (!numero || isNaN(numero)) {
        alert('no es un numero');
        numero = prompt('ingrese un numero');

    }
    return numero
}      

alert(obtenerNumero())
 */


/* const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: '40'
    },
    {
        nombre: 'juan',
        apellido: 'lopez',
        edad: '20'
    },
    {
        nombre: 'maria',
        apellido: 'lopez',
        edad: '30'  
    }
]
let contador = 0

for ( let i = 0; i < personajes.length; i++) {
        const personaje = personajes[i];

        console.log('hola mi nombre es' + personaje.nombre + 'mi apellido es' + personaje.apellido + 'y tengo' + personaje.edad + 'años');
        contador = contador  + Number(personaje.edad)
    }

console.log('total de edades es : '     + contador)     */


/* const personajes = [
    {
        nombre: 'pepe',
        apellido: 'suarez',
        edad: '40'
    },
    {
        nombre: 'juan',
        apellido: 'lopez',
        edad: '20'
    },
    {
        nombre: 'maria',
        apellido: 'lopez',
        edad: '30'  
    }
]
let contador = 0

for ( const personaje of personajes) {
      
        console.log('hola mi nombre es' + personaje.nombre + 'mi apellido es' + personaje.apellido + 'y tengo' + personaje.edad + 'años');
        contador = contador  + Number(personaje.edad)
    }

console.log('total de edades es : '     + contador)     */

const productos = [
    {
        nombre: 'leche',
        precio: 100,    
        id: 1   
    },
    {
        nombre: 'pan',
        precio: 50,
        id: 2
    },
    {
        nombre: 'arroz',
        precio: 150,
        id: 3
    }
]

const productomayoesa = productos.filter(function(producto){

    return (producto.precio > 100)
})
/* console.log(' los productos con precio mayor a 100 son : ' +  JSON.stringify(productomayoesa)) */

console.log('Los productos con precio mayor a 100 son:');
productomayoesa.forEach(function(producto) {
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, ID: ${producto.id}`);
}); 