let nombre = 'Emmanuel'
console.log (nombre)

// ejercicio
const frutas = ["Manzana", "Banano", "Fresa", "Pera", "Piña"]
// sintaxis para escribir forEach
// Array.foreach((elemento, indice(opcional)=>{})

frutas.forEach((fruta, i)=>{
    console.log(`Fruta# ${i+1}: ${fruta}`)
})

const numeros = [1,2,3,4,5,6,7,8,9,10]
numeros.forEach((numeros, i)=>{
    if (numeros % 2 === 0) 
        console.log(`Numeros pares son : ${numeros}` ) 
})