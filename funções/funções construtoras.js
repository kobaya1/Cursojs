function carro(vel=200,delta=5){
    //atributo da função carra
    let velatual = 0

    //metodo publico
  this.acelerar = function(){ //this e usado para tornar a "variavel" publica
     if( velatual+delta<=vel){
         velatual+=delta
     }
     else{
         velatual = vel
     }
  }
}
this.getvel = function(){
    return velatual
}

const uno = new carro  //add novo objeto em carro
uno.acelerar()
console.log(uno.velatual())


const buggati = new carro(400,20)
buggati.acelerar()
buggati.acelerar()
buggati.acelerar()
console.log(buggati.velatual())