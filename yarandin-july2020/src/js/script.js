'use strict';

const filmsCont = document.getElementById('films');

// fetch json from starwars api

fetch('https://swapi.dev/api/films/')
    .then((response) => response.json())
    .then((response) => addFilms(response));

//get list of films

function addFilms(obj) {
    obj.results.forEach(el => {
        drawListOfFilms(el);
    });
}

//draw list of films

function drawListOfFilms(el) {
    const item = document.createElement('div');
    item.classList.add('film');
    filmsCont.appendChild(item);
    const link = document.createElement('a');
    link.setAttribute('href', './film/film.html#' + el.url.substring(el.url.length - 1, el.url.length - 2));
    item.appendChild(link);
    const title = document.createElement('p');
    title.innerHTML = el.title + ' - ' + el.release_date.substring(0, 4);
    link.appendChild(title);
}