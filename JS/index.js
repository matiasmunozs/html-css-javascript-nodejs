// console.log("Hola Mundo")

let miPrimeraVariable = 'Mi Primera Variable!'
// console.log(miPrimeraVariable)

miPrimeraVariable='Esto ha cambiado'
// // console.log(miPrimeraVariable)

miPrimeraVariable ='Otra Vez'
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

const miObjeto= {
    unNumero: 12,
    unString : 'Esta cadena de caracteres',
    unaCondicion: true,
}
// console.log(miObjeto)
// console.log(miObjeto.unString)

const arrVacio = []
const arr= [1,2,'Hola','Mundo', miObjeto]

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
num+=5
num-=5

console.log(num)