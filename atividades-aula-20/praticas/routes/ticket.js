const express = require('express');
const app = express();

app.use(express.json());

// Array
let tickets = [];

// Listar todos
app.get('/ticket', (req, res) => {
    res.json(tickets)
});

// Adicionar ticket
app.post('/ticket', (req, res) => {
    const novoTicket = {
        id: tickets.lenght + 1,
        ...req.body
    }
    tickets.push(novoTicket);
});

// PUT
app.put('/ticket/:id', (req, res) => {
    const {id} = req.params

    let ticket = tickets.find(t => t.id === id)

    if(!ticket){
        return res.status(404).json({msg: 'Ticket não encontrado, então ele não será atualizado.'})
    }

    ticket = {...ticket, ...req.body}

    tickets = tickets.map(t => (t.id === id ? ticket : t))
});

app.delete('/ticket/:id', (req, res) => {
    const {is} = req.params;
    tickets = tickets.filter(t => t.id != id);
    res.json({
        msg: 'Ticket atualizado com sucesso.'
    })
})

function middlewareValidarTicket(req, res, next) {
    const {titulo, prioridade, descricao, categoria, nomeSolicitante, departamento, telefone, email} = req.body

    if(!titulo || !prioridade || !descricao || !categoria || !nomeSolicitante || !departamento || !telefone || !email) {
        return res.status(400).json({msg: 'Titulo é obrigatório'})
    }

    // Se tiver tudo certo, segue adiante
    next();
}

module.exports = app;