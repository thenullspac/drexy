// Criação do servidor em nodeJS 
// create the server on nodejs
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Servidor rodando na bagaceira!');
});

app.listen(3333)