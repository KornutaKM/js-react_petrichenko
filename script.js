'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0)

const personalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
}

let oneOfTheLastMovies = prompt('Один из последних фильмов?', '')
let countOfLastMovie = +prompt('На сколько его оцените?')

personalMovieDb.movies[oneOfTheLastMovies] = countOfLastMovie

let oneOfTheLastMovies1 = prompt('Один из последних фильмов?', '')
let countOfLastMovie1 = +prompt('На сколько его оцените?')

personalMovieDb.movies[oneOfTheLastMovies1] = countOfLastMovie1
