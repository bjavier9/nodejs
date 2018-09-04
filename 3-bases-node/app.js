
const argv = require('./config/yargs').argv;
const colors = require('colors')
const { crearArchivo, listarTabla} = require('./multiplicar/multiplicar')
let comando = argv._[0];
switch(comando){
    case'listar':
        console.log('Listar')
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        console.log('crear');
        crearArchivo( argv.base, argv.limite)
            .then(archivo =>console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e))
        break;
    default:
        console.log('comando no reconocido')
}
let argv2 = process.argv;
console.log('limite',argv.limite);
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// for(let i = 0; i <=10; i++){
//     data +=`2x${i} = ${i*base}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err)=>{
//     if (err) throw err;
//     console.log(`el archivo tabla-${base}.txt ha sido creado`)
// })
