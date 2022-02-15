const fs = require('fs');
const colors= require('colors');

const crearArchivo= async(base =5, l = false, h= 10)=>{

try {

    let salida ="";
    let consola= "";
    
        console.log('======================================'.green);
        console.log('======================================'.green);
        console.log('            TABLA : '.yellow, colors.blue(base));
        console.log('======================================'.green);
        console.log('======================================'.green);
    
        for (let index = 1; index <= h; index++) {
        salida +=`${base} x ${index} = ${base*index} \n`;
        consola +=`${base} ${"x".green} ${index} ${"=".green} ${base*index} \n`;
        }
    
        l ? console.log(consola) : '';

        fs.writeFileSync(`./Output/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt creado`;

    } catch (error) {
        throw error
    }
   

}

module.exports={ crearArchivo}