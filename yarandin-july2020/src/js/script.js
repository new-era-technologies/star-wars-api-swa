'use strict';

const mainUrl = 'https://swapi.dev/api/',
      filmsUrl = 'films/',
      filmsCont = document.getElementById('films');


// fetch json from starwars api

function fetchStWarsApi(url) {
    try {
        fetch(url,
            {
                method: "GET",
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((response) => addFilms(response));
    } catch (error) {
        alert(error);
    }
}

fetchStWarsApi(mainUrl + filmsUrl);


//get list of films

function addFilms(obj) {
    obj.results.forEach(el => {
        drawListOfFilms(el);
        console.log(el)
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
    title.classList.add('film__title');
    title.innerHTML = el.title + ' - ' + el.release_date.substring(0,4);
    link.appendChild(title);
}