const colors = require('colors')
const fs = require('fs')

let listarTabla = (base, limite = 10)=>{

    console.log('---------------'.underline.red);
    console.log(`Tabla del ${base}`.underline.green);
    console.log('---------------'.underline.red);
    for(let i = 0; i<=limite; i++){
        console.log(`2x${i} = ${i * base}\n`);
    }

}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        
        if (!Number(base)){
            reject(`El valor introducido ${base} no es un numero `)
            return;
        }
        let data = ''
        for (let i = 0; i <= limite; i++) {
            data += `2x${i} = ${i * base}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`)
            console.log(`el archivo `,colors.rainbow(`tabla-${base}.txt`),`ha sido creado con limite ${limite}`)
        })
    })
}
module.exports = {
    crearArchivo,
    listarTabla
}



