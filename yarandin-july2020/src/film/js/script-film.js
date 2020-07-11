'use strict';

const query = window.location.hash.split('#')[1],
    url = 'https://swapi.dev/api/films/' + query + '/',
    title = document.getElementById('title'),
    episode = document.getElementById('episode'),
    director = document.getElementById('director'),
    producer = document.getElementById('producer'),
    date = document.getElementById('date'),
    characters = document.getElementById('characters'),
    crawl = document.getElementById('crawl'),
    planets = document.getElementById('planets'),
    species = document.getElementById('species'),
    starships = document.getElementById('starships'),
    vehicles = document.getElementById('vehicles');

// fetch film info

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
        .then((response) => addFilmInfo(response));
} catch (error) {
    alert(error);
}

// draw film info

function addFilmInfo(obj) {
    console.log(obj);
    title.innerHTML += obj.title;
    episode.innerHTML += obj.episode_id;
    director.innerHTML += obj.director;
    producer.innerHTML += obj.producer;
    date.innerHTML += obj.release_date;
    obj.characters.forEach(el => { 
        fetch(el)
            .then((response) => response.json())
            .then((response) => characters.innerHTML += response.name + ', ');
     });
    crawl.innerHTML += obj.opening_crawl;
    obj.planets.forEach(el => { 
        fetch(el)
            .then((response) => response.json())
            .then((response) => planets.innerHTML += response.name + '<br/>');
     });
     obj.species.forEach(el => { 
         fetch(el)
             .then((response) => response.json())
             .then((response) => species.innerHTML += response.name + ', ');
      });
      obj.starships.forEach(el => { 
          fetch(el)
              .then((response) => response.json())
              .then((response) => starships.innerHTML += response.name + ', ');
       });
       obj.vehicles.forEach(el => { 
           fetch(el)
               .then((response) => response.json())
               .then((response) => vehicles.innerHTML += response.name + ', ');
        });
}