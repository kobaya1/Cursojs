const x = 'global'

function fora(){
    const x = 'local'
    function dentro(){
        return x
    }
}