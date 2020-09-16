const nota = [5.0,3.0,5.1,9]
//sem callback
let extrair = []
for(let i in nota){
    if(nota[i]<7){
        extrair.push(nota[i])
    }
}

console.log(extrair)

//com callback
extrair = nota.filter(function(nota){
    return nota < 7
})