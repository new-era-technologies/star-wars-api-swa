'use strict';

const query = window.location.hash.split('#')[1],
    url = 'https://swapi.dev/api/films/' + query + '/',
    title = document.getElementById('title'),
    episode = document.getElementById('episode'),
    director = document.getElementById('director'),
    producer = document.getElementById('producer'),
    date = document.getElementById('date'),
    crawl = document.getElementById('crawl'),
    butCont = document.getElementById('but_cont'),
    cont = document.getElementById('content'),
    sortEl = document.querySelectorAll('.sort_el'),
    obj = {
        characters: [],
        planets: [],
        species: [],
        starships: [],
        vehicles: []
    };

// fetch film info

fetch(url)
    .then((response) => response.json())
    .then((response) => addFilmInfo(response));

// draw film info

function addFilmInfo(obj) {
    console.log(obj);
    title.innerHTML += obj.title;
    episode.innerHTML += obj.episode_id;
    director.innerHTML += obj.director;
    producer.innerHTML += obj.producer;
    date.innerHTML += obj.release_date;
    drwEls(obj.characters, 'characters');
    crawl.innerHTML += obj.opening_crawl;
    drwEls(obj.planets, 'planets');
    drwEls(obj.species, 'species');
    drwEls(obj.starships, 'starships');
    drwEls(obj.vehicles, 'vehicles');
}

// draw elems

function drwEls(obj, el) {
    obj.forEach(val => {
        fetch(val)
            .then((response) => response.json())
            .then((response) => pushToObj(el, response));
    });
}

function pushToObj(el, response) {
    document.getElementById(el).innerHTML += response.name + '<br/>';
    obj[el].push(response.name);
}

// show content for sort

butCont.addEventListener('click', function () {
    cont.style.display = 'block';
    console.log(obj)
});

// sort by clicking el

for (let i = 0; i < sortEl.length; i++) {
    sortEl[i].addEventListener('click', function (e) {
        sortNames(e.target.innerHTML);
    });
}

//sort els

function sortNames(val) {
    obj[val].sort(function (a, b) {
        var nameA = a.toUpperCase(); // ignore upper and lowercase
        var nameB = b.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        // names must be equal
        return 0;
    });
    document.getElementById(val).innerHTML = val + ': ';
    obj[val].forEach(it => document.getElementById(val).innerHTML += it + '<br/>');
}