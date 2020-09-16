const operação = function(x,y){//funçaõ implicita
  return x+y
}

const resultado = function(a,b, soma = operação){
  console.log(operação(a,b))                     //A "soma" e uma função implicita 

}

resultado(4,5)//parametro de "soma"