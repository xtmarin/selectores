// Definir las variables
let nombre = 'Emmanuel'
let apellido = 'Muñoz'

// Funciones
function cliente(nombre) {
    console.log(`Mi nombre es ${nombre}`)
}
cliente(nombre)

// Funciones
function sumaDosNumeros(num1,num2){
    console.log(num1 + num2)
}
sumaDosNumeros(3, 2)

// Funciones
function sumDosNumeros(n1, n2){
    return(n1 + n2)
}
let resultado = sumDosNumeros(7,9)
console.log(resultado)

// Boolean
let esEstudiante = true 
let noEstudiante = false 

// Variable Undefined
let ciudad
console.log(ciudad)

// Valor null

let ciudad2 = null

// Arrow function -> Funciones de flecha, lo mas nuevo
sumaDosNumeros =(n1, n2)=> {
    console.log (`Esta es la funcion flecha: ${n1+n2}`)
}
sumaDosNumeros(7,1)

