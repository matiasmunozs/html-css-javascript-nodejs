// console.log("Hola Mundo")

let miPrimeraVariable = 'Mi Primera Variable!'
// console.log(miPrimeraVariable)

miPrimeraVariable = 'Esto ha cambiado'
// // console.log(miPrimeraVariable)

miPrimeraVariable = 'Otra Vez'
// // console.log(miPrimeraVariable)

// La mutabilidad es cuando tenemos una variables y le reasignamos su valor

let miBoolean = true
let miOtrobool = false

let miNumero = 0
let miNumero2 = 12
let miNumero3 = -258

// console.log(miBoolean, miNumero, miNumero2, miNumero3)

let undef

// console.log(undef)

let nul = null
// console.log(nul)

const miPrimerObjeto = {}

const miObjeto = {
    unNumero: 12,
    unString: 'Esta cadena de caracteres',
    unaCondicion: true,
}
// console.log(miObjeto)
// console.log(miObjeto.unString)

const arrVacio = []
const arr = [1, 2, 'Hola', 'Mundo', miObjeto]

// console.log(arrVacio)

// console.log(arr)
arrVacio.push(5)
arrVacio.push(3)
arrVacio.push(1)
arrVacio.push('Hola')
arrVacio.push(miPrimeraVariable)

// console.log(arrVacio)


let num = 5

// num--
num += 5
num -= 5

// console.log(num)


//Operadores de Comparación -  Siempre devuelven un boolean

const resultado1 = 5 === 6
const resultado2 = 5 == '5'



const resultado3 = 5<6
const resultado4 = 5<5



const resultado5 = 5 !==6
const resultado6 = 5 != '5'



// or || , and &&, not !   Operadores Logicos


//Or evalua hasta el primer true, todos los valores son verdadero excepto el 0 
const resultadoOr = false || false
// console.log(resultadoOr)

//and evalua hasta el primer valor false
const resultadoAnd = true && true
// console.log(resultadoAnd)

const resultadoNot = !true

console.log(resultadoNot)