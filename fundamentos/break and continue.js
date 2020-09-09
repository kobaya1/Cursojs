const numbers = [1,2,3,4,5,6]

for (x in numbers){
    if(x == 3)
    break //quebra a execução pra fora do laço
}
console.log( x + ' = '+ numbers)

continue//ele faz com que o loop busque apenas o necessario