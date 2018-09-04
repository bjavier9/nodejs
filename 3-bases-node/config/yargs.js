const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'imprime tabla de multiplicas',opts )
    .command('crear', 'crea un archivo hasta el numero dado',opts)
    .argv


module.exports = {
    argv
}