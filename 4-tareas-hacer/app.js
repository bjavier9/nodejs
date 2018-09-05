const argv = require('./config/yargs').argv
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors')
let comando = argv._[0]

switch(comando){
    case 'crear':
        porHacer.crear(argv.description)
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for(let tarea of listado){
            if(tarea.completado == false){
                console.log('========Por Hacer======'.rainbow)
            }else{
                console.log('========Hecha======'.rainbow)
            }
            
            console.log(tarea.descripcion);
            if(tarea.completado == false){
                console.log('Estado: no completada')
            }else{
                console.log('Estado: completada')
            }
            
            console.log('======================='.rainbow);

        }
        break;
    
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion)
    console.log(borrado)
        break;
    default:
        console.log('comando desconocido')
}