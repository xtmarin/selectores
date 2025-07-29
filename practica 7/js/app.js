let nombre = 'Emmanuel'
console.log (nombre)

// .filter(): Crea un nuevo arreglo que contiene solo los elementos que cumplen la condicion. 
// sintaxis 
/* const nuevoaArray = array.filter((elemento, indice(opional))=>{})
*/

const edades = [15, 18, 22, 13, 40]
const mayoresDeEdad = edades.filter(edad => edad >= 18 )
console.log(mayoresDeEdad)

const nombres = ["Carlos", "Ana", "Camila", "Luis" , "Cristian", "Sofia", "Marcela"]
const nombresConC = nombres.filter(nombre => nombre.startsWith("C"))
console.log(nombresConC)


