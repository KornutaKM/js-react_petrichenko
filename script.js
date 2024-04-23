'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0)

const personalMovieDb = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
}

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

if (personalMovieDb.count <= 10) {
	console.log('Просмотрено довольно мало фильмов')
} else if (personalMovieDb.count <= 30) {
	console.log('Вы классический зритель')
} else if (personalMovieDb.count > 30) console.log('Вы киноман')
else {
	console.log('Произошла ошибка')
}
