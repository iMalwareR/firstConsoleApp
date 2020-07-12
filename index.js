const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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
}

console.log(personalMoviesDB);