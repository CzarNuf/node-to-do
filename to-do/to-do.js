const fs = require('fs');

let todoList = [];

const saveDB = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('Could not save data', err);
        }
    });
}

const loadDB = () => {

    try {
        todoList = require('../db/data.json');
    } catch (e) {
        todoList = [];
    }
}

const create = (description) => {

    loadDB();

    let toDo = {
        description,
        complete: false
    };

    todoList.push(toDo);

    saveDB();

    return toDo;

}

const update = (description, complete = true) => {

    loadDB();

    let index = todoList.findIndex(tarea => tarea.description === description);

    if (index !== -1) {
        todoList[index].complete = complete;
        saveDB();
        return true;
    }

    return false;

}

const remove = (description) => {

    loadDB();

    let index = todoList.findIndex(tarea => tarea.description === description);

    if (index !== -1) {
        todoList.splice(index, 1)
        saveDB();
        return true;
    }

    return false;

}

const getList = () => {

    loadDB();

    return todoList;
}

module.exports = {
    create,
    getList,
    update,
    remove
}