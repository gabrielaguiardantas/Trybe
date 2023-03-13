const fs = require('fs');
const path = require('path');

// exercício 4
function readJson() {
    try {
        const data = fs.readFileSync(path.resolve('./src/movies.json'));
        const movies = JSON.parse(data);
        if (!movies) {
            throw new Error('Arquivo JSON não encontrado');
        }
        return JSON.stringify(movies);
    } catch (error) {
        console.error(`Erro ao ler o arquivo: ${error.message}`);
    }
}

// exercício 5
function findMovieById(id) {
    try {
        const data = fs.readFileSync(path.resolve('./src/movies.json'));
        const movies = JSON.parse(data);
        const movieSearched = movies.find((movie) => movie.id === Number(id));
        if (!movieSearched) {
                throw new Error('Nenhum filme encontrado neste id');
            }
        return JSON.stringify(movieSearched);
    } catch (error) {
        console.error(`Erro ao ler o arquivo: ${error.message}`);
    }
}

function addMovie(newMovie) {
    try {
        const data = fs.readFileSync(path.resolve('./src/movies.json'));
        const movies = JSON.parse(data);
        movies.push(newMovie);
        fs.writeFileSync(path.resolve('./src/movies.json'), JSON.stringify(movies));
        return JSON.stringify(movies);
    } catch (error) {
        console.error(`Erro ao ler o arquivo: ${error.message}`);
    }
}

function updateMovieById(id, req) {
    try {
        const data = fs.readFileSync(path.resolve('./src/movies.json'));
        const movies = JSON.parse(data);
        const movieSearched = movies.findIndex((movie) => movie.id === Number(id));
        movies.splice(movieSearched, 1, req.body);
        fs.writeFileSync(path.resolve('./src/movies.json'), JSON.stringify(movies));
        return JSON.stringify(movies);
    } catch (error) {
        console.error(`Erro ao ler o arquivo: ${error.message}`);
    }
}

function deleteMovieById(id) {
    try {
        const data = fs.readFileSync(path.resolve('./src/movies.json'));
        const movies = JSON.parse(data);
        const movieSearched = movies.findIndex((movie) => movie.id === Number(id));
        movies.splice(movieSearched, 1);
        fs.writeFileSync(path.resolve('./src/movies.json'), JSON.stringify(movies));
        return JSON.stringify(movies);
    } catch (error) {
        console.error(`Erro ao ler o arquivo: ${error.message}`);
    }
}

module.exports = {
    readJson,
    findMovieById,
    addMovie,
    updateMovieById,
    deleteMovieById,
};