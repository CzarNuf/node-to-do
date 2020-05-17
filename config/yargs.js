const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const optCrear = {
    descripcion
}

const optActualizar = {
    ...optCrear,
    completado
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', optCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', optActualizar)
    .command('borrar', 'Borrar una tarea por hacer', optCrear)
    .command('listar', 'Enlista las tareas registradas', {})
    .help()
    .argv;

module.exports = {
    argv
}