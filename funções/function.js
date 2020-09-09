//são opcionas
function example(){
}

//armazenar numa variavel
const ex = function(){}//a funçaõ se torna o parametro

//pode ser armazenado numa array 

const array = [function (a,b) {return a+b})]

//armazenar em um atributo de objeto 
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())
//passar função como parametro

function(parametro)fun:any 
  fun()

//retornar uma função detro de uma função
function soma (a,b){
    return function(c){
        console.log(a+b+c)
    
    }
}
soma(5,6)