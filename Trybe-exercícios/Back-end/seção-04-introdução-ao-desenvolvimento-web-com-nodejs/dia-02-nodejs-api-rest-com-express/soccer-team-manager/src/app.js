// src/app.js
const express = require('express');

const teams = [
    {
      id: 1,
      name: 'São Paulo Futebol Clube',
      initials: 'SPF',
    },
    {
      id: 2,
      name: 'Clube Atlético Mineiro',
      initials: 'CAM',
    },
];

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).send('<h1>Olá Mundo!</h1>'));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);
  
    res.status(201).json({ team: newTeam });
  });

  app.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;
  
    const updateTeam = teams.find((team) => team.id === Number(id));
  
    if (!updateTeam) {
      res.status(404).json({ message: 'Team not found' });
    }
  
    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(200).json({ updateTeam });
  });

  // filtrando pelo id 
  app.get('/teams/:id', (req, res) => {
    const { id } = req.params;

    const searchedTeam = teams.find((team) => team.id === Number(id));

    if (!searchedTeam) {
        res.status(404).json({ message: 'Team not found' });
      }

    res.status(200).json({ searchedTeam });
  });

  app.delete('/teams/:id', (req, res) => {
    const { id } = req.params;
    const arrayPosition = teams.findIndex((team) => team.id === Number(id));
    teams.splice(arrayPosition, 1);
  
    res.status(200).end();
  });

module.exports = app;