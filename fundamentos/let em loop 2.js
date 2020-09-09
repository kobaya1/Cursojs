const fuc = []//array    /* o codigo puxa a partes especificas do laço dentro do array*/
for (let i = 0;i < 10; i++)
{
                   fuc.push(function()
                   {
        console.log(i)
                            
}
}

fuc[2]()
fuc[4]() //parte especificas do laço

