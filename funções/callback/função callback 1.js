const fabri=["BMW", "audi","tesla"]
//função chamada quando acontecer
function imprimir(nome,indice){
    console.log(indice+'.' + nome )
    
}

fabri.forEach(imprimir)
fabri.forEach(fabri =>console.log(fabri))