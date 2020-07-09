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


//draw list of films

function addFilms(obj) {
    obj.results.forEach(el => {
        console.log(el);
    });
}