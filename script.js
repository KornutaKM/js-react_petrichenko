'use strict'

let numberOfFilms

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0)

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0)
	}
}

function rememberMyFilms() {
	let count = 0

	while (count < 2) {
		let oneOfTheLastMovies = prompt('Один из последних фильмов?', '')
		if (
			oneOfTheLastMovies == '' ||
			oneOfTheLastMovies == null ||
			oneOfTheLastMovies.length > 50
		) {
			continue
		}
		let countOfLastMovie = +prompt('На сколько его оцените?')

		personalMovieDb.movies[oneOfTheLastMovies] = countOfLastMovie

		count++
	}
}

function detectPersonalLevel() {
	if (personalMovieDb.count <= 10) {
		console.log('Просмотрено довольно мало фильмов')
	} else if (personalMovieDb.count <= 30) {
		console.log('Вы классический зритель')
	} else if (personalMovieDb.count > 30) console.log('Вы киноман')
	else {
		console.log('Произошла ошибка')
	}
}

function showMyDB() {
	if (personalMovieDb.private == false) console.log(personalMovieDb)
}

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		personalMovieDb.genres[i] = prompt(
			`Ваш любимый жанр под номером ${i + 1}:`,
			''
		)
	}
}

start()

const personalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
}

rememberMyFilms()

detectPersonalLevel()

showMyDB()

writeYourGenres()
