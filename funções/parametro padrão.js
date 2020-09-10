function example(a,b,c){
     a = a || 1 /*|| equivale  a ou*/
     b = b || 2 
     c = c || 3
     return a+b+c
} 

console.log(example())/*como as variaveis não estão definidas o retorno será de ||*/

/*ao declarar 0 retorna ou*/ 

//forma mais facil


function soma (a=1,b=1,c=1){
    return a+b+c
}                                         /* /\ */
console.log()//declara-se as variaveis acima  I  //