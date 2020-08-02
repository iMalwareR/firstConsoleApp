
let personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    
    start: function() {
        personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
            personalMoviesDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    
    rememberMyFilms:()=> {
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
    },

    detectPersonalLevel:() => {
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
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMoviesDB);
        }
    },

    toggleVisibleMyDb:() => {
        if (personalMoviesDB.privat === false) {
            personalMoviesDB.privat = true;
        }

        else {
            personalMoviesDB.privat = false;
        }
    },

    writeYourGenres:() => {
        for (let i = 1; i <= 3; i++) {
            const genres = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genres === '' || genres == null) {
                console.log('Вы ввели некоректные данные');
                i--;
            } 

            else {
                personalMoviesDB.genres[i - 1] = genres;
            };  
        }

        personalMoviesDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`)
        })
    },
};