/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';





const udrek = document.querySelectorAll('.reclama img');
udrek.forEach((p)=> {
    p.remove();
});


const pereim = document.querySelector('.text p')
pereim.innerHTML = "драма";


const newpic = document.querySelector('.bg_img')
newpic.style.backgroundImage = "url('img/bg.jpg')";


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против...",
        "юла"
    ]
};

const ulki = document.querySelector(".ul")
ulki.innerHTML = '';

movieDB.movies.sort();

/* movieDB.movies.forEach((film, index)=> {
const lishka = document.createElement('li');
lishka.textContent = (index + 1) + ". " + film;
ulki.appendChild(lishka);
}); */
movieDB.movies.forEach((film, index)=> {
    ulki.innerHTML += `<ul> ${index+1} ${film} <span class="delete-icon">🗑️</span> </ul>`
});

const deleteIcons = document.querySelectorAll('.delete-icon');
deleteIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        movieDB.movies.splice(index, 1);
        renderMovies();
    });
});
function renderMovies() {
    ulki.innerHTML = '';
    movieDB.movies.forEach((film, index) => {
        ulki.innerHTML += `<li>${index + 1} ${film} <span class="delete-icon">🗑️</span></li>`;
    });
    const newDeleteIcons = document.querySelectorAll('.delete-icon');
    newDeleteIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            movieDB.movies.splice(index, 1);
            renderMovies();
        });
    });
}