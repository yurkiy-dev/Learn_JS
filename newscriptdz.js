const numbersOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numbersOfFilms, //ответ на наш вопрос
    movies: {}, // в свойство поместили пустой объект
    actors: {},
    genres:[], // добавили пустой массив - в массиве элементы идут строго по порядку
    private: false
};
const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('Насколько оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('Насколько оцените его?', '');

personalMovieDB.movies[a] = b;// обращаемся к нашим данным чтобы передать ответ на первый вопрос
personalMovieDB.movies[c] = d;// обращаемся к нашим данным чтобы передать ответ на первый вопрос
