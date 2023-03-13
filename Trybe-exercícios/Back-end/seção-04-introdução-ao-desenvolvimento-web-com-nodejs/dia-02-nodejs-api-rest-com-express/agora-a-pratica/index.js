const express = require('express');
const { findMovieById, readJson, addMovie, updateMovieById, deleteMovieById } = require('./src/app');

const app = express();

app.use(express.json());

// exercício 6
app.get('/movies', (req, res) => {
    if (!readJson()) {
        return res.status(404).send('<h1>Erro 404 - Não encontrado nenhum JSON</h1>');
    }
    return res.status(200).send(readJson());
});

// exercício 5
// app.get('/movies/:id', (req, res) => {
//     const { id } = req.params;
//     if (!findMovieById(id)) { 
//         return res.status(404).send('<h1>Erro 404 - Não encontrado filme com este id</h1>'); 
//     }
//     return res.status(200).send(findMovieById(id));
// });

// exercício 7
app.post('/movies', (req, res) => {
    const newMovie = { ...req.body };
      addMovie(newMovie);
      res.status(201).json({ movies: newMovie });
});

// exercício 8
app.put('/movies/:id', (req, res) => {
    const id = { ...req.body };
    updateMovieById(id, req);
    res.status(200).json({ movies: id });
});

// exercício 9
app.delete('/movies/:id', (req, res) => {
    const id = { ...req.body };
    deleteMovieById(id);
    res.status(410).end('Deleção concluída com sucesso');
});

// exercício 10
app.get('/movies/search', (req, res) => {
    const movies = JSON.parse(readJson());
    const searchedMovie = movies
    .filter((movie) => ((movie.movie).toLowerCase()).includes(req.query.q));

    if (searchedMovie.length === 0) {
        return res.status(404).send([]);
    }
    return res.status(200).send(JSON.stringify(searchedMovie));
});

module.exports = app;