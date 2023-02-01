"use strict";

const numberOfFilms = +prompt("How many movies have you watched?", "");

const personalMovieDB = {
	count: numberOfFilms,
	movies : {},
	actors: {},
	genres: [],
	privat: false
};

const movieName = prompt("Name one of the last movies which you have watched", "");
const movieRate = prompt("How would you rate it", "");

personalMovieDB.movies[movieName] = movieRate;

console.log(personalMovieDB);