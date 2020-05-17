const { argv } = require('./config/yargs');
const colors = require('colors');
const toDo = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
    case 'crear':

        let pending = toDo.create(argv.descripcion);
        console.log(pending);
        break;

    case 'listar':

        let list = toDo.getList();

        for (let task of list) {
            console.log('========Por Hacer========'.green);
            console.log(task.description.blue);
            console.log('Estado: ', task.complete);
            console.log('========================='.green);
        }

        break;

    case 'actualizar':
        let updated = toDo.update(argv.descripcion, typeof argv.completado === 'string' ? argv.complete === 'true' : argv.complete);
        console.log(updated);
        break;

    case 'borrar':
        let removed = toDo.remove(argv.descripcion);
        console.log(removed);
        break;

    default:
        console.log('Commando no es reconocido');
}