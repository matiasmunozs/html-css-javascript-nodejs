

function sumar(a,b,cb){

    const r = a+b
    cb(r)
 
}

function callback(result){
console.log('resultado', result)

}
sumar(2,3, function(r){
    console.log('soy una funcion anonima y mi resultado es ', r);

})


