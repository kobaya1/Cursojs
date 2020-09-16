const valor = 'global'

function função (){
    console.log(valor)
}

function exec(){
    const valor = 'local'
    função()
}