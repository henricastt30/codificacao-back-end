const express = require('express')

let tasks = [
{ id: 1, title: "Estudar apis", done: false},
{ id: 2, title: "Praticar Docker", done: true}
]

// Regras: de negocio:
// O título é obrigatório
// N pode haver titulo duplicado
// Só é possível concluir uma tarefa se ela existir
// N é permitido atualizar ou excluir uma tarefa inexistente
// N é permitido excluir uma tarefa concluída

const getAll = () => tasks;

const getById = (id) => {
    const task = tasks.find(t => t.id === id)
    if (!task) throw { status: 404, message: "Tarefa não encontrada"
    }
    return task
}

const update = (id, {title, done}) => {
    const task = getById(id);

    if(title){
        const exists = task.some(
            t => t.title.toLowerCase() === title.toLowerCase() && t.id !== id
        );

        if(exists)
            throw {status: 400, message: "Já existe outa tarefa com este título."}

        task.title = title;
    }

    if(done !== undefined) {
        if(typeof done !== "boolean")
            throw {status: 400, message: "O campo deve ser 'true' ou 'false'"}
        task.done = done;
    }
}

const create = (title) => {
    if(!title)
        throw {status: 400, message: "O campo 'title' é obrigatório."}

    const exists = task.some(
        t.title.toLowerCase() === title.toLowerCase()
    )

    if(exists)
        throw {status: 400, message: "Já existe uma tarefa com este título."}

    const newTask = {id: tasks.length + 1, title, done: false}
    tasks.push(newTask);
    return newTask;
}

const del = (id) => {
    const taskIndex = tasks.findIndex(t => t.id === id)
    if(taskIndex === -1)
        throw {status: 404, message: "Tarefa não encontrada."}

    if(tosks[taskIndex].done){
        throw {status: 400, message: "Não é permitido excluir uma tarefa concluida."}
    }

    const deleted = tasks.splice(taskIndex,1)[0]
    return deleted;
}

module.exports = { getAll, getById, create, update, del }