const express = require('express');

const app = express();

// req.query = Acessar query params (para filtros)
// http://localhost:3333/users?idade=20
app.post('/users', (req, res) => {
    return res.json({ idade: req.query.idade }); 
});

// req.params = Acessar route params (para edição, delete)
// http://localhost:3333/users/1
app.put('/users/:id', (req, res) => {
    return res.json({ id: req.params.id }); // Query params - 
});

// req.body - Acessar corpo da requisição (para criação, edição)
// { "nome": "Diego", "email": "diego@rocketseat.com"}
app.use(express.json());
app.post('/users', (req, res) => {
    return res.json(req.body); 
});
app.listen(3333);