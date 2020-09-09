/*armazenamento de função em uma variavel*/
const divisão = function(a,b){
    return a/b
}

console.log(divisão(72,8))

/*function de forma reduzida (arrow)*/
const mult = (a,b)=>{
    return a*b
}

console.log(mult(4000, 5.31))

/*arrow mais simples ainda*/
const add = (a,b)=> a + b

console.log(add(4120,1280))

/*exemplo*/    

let dolar = function (real){
    return real * 5.31
}

console.log(dolar(50000))
