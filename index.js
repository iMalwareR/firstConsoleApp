let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
};

start();

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMoviesDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    };
};

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMoviesDB.count < 10 && personalMoviesDB.count >= 0) {
        console.log("Посмотренно мало фильмов")
    }
    
    else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
        console.log('Вы классический хритель')
    }
    
    else if (personalMoviesDB.count >= 30) {
        console.log('Вы киноман')
    }
    
    else {
        console.log('Произошла ошибка')
    };
};

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoviesDB);
    }
};

showMyDB(personalMoviesDB.privat);

console.log(personalMoviesDB);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMoviesDB.genres[i - 1] = genres;
    }
};

writeYourGenres();