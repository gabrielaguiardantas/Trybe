// src/app.js
const express = require('express');
const fs = require('fs').promises;

const app = express();

app.use(express.json());

app.post('/activities', (req, res) => {
    const newActivity = {
        name: 'Trekking',
        price: 0,
        description: {
          rating: 5,
          difficulty: 'Fácil',
          createdAt: '10/08/2022',
        },
      };
    
    res.status(201).send({ message: 'Atividade cadastrada com sucesso' });
});

module.exports = app;