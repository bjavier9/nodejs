const argv = require('yargs')
    .command('crear', 'crea una tarea nueva',{
        description:{
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualiza  el estado de una tarea',{
        descripcion:{
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'marca como completado o por hacer'
        }
    }) .command('borrar', 'borrado de la tarea',{
        descripcion:{
            demand: true,
            alias:'d',
            desc: 'descripcion de la tarea por hacer'
        }
    })
        .help()
    .argv


module.exports = {
    argv
}