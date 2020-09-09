const pes1=1.0
const pes2=2.0

console.log( pes1,pes2)

const prova1=5.56
const prova2=10.00

const nota  = pes1*prova1 + pes2*prova2
const media = nota  /(pes1+pes2)

console.log(media.toFixed(1))/*"arredonda" notas*/
console.log(media.toString(2))/*mostra o binario*/
console.log(typeof media)/*tipo primitivo*/

/*console.log(7/0)=Infinity*/
