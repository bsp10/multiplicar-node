const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        console.log('======================='.green);
        console.log(`Tabla de ${base}`.red);
        console.log('======================='.green);

        if(!Number(base)){
            reject(`El valor base introducido ${base} no es un número`);
            return;
        }

        for(let i=1; i<=limite; i++){
            console.log(`${base}*${i} = ${base*i}`);

        }
    });
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        
        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        //let base = 2;
        let data = '';

        for(let i=1; i<=limite; i++){
            data += `${base}*${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {
            if (err) rejects(err);
            else resolve(`Tabla-${base}.txt`)

            console.log('El archivo ha sido creado!');
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}