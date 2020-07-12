'use strict';

const filmsInpRad = document.getElementById('films_srch'),
    pplInpRad = document.getElementById('people_srch'),
    stshipsInpRad = document.getElementById('starships_srch'),
    planInpRad = document.getElementById('planets_srch'),
    specInpRad = document.getElementById('species_srch'),
    vehInpRad = document.getElementById('vehicles_srch'),
    radButs = document.querySelectorAll('.radio_buts'),
    srchInp = document.getElementById('srch'),
    srchField = document.getElementById('srch_field');

// entering values in search    

srchInp.addEventListener('keyup', function (e) {
    if (pplInpRad.checked) {
        fetchSrch(pplInpRad.value, e.target.value);
    } else if (stshipsInpRad.checked) {
        fetchSrch(stshipsInpRad.value, e.target.value);
    } else if (planInpRad.checked) {
        fetchSrch(planInpRad.value, e.target.value);
    } else if (specInpRad.checked) {
        fetchSrch(specInpRad.value, e.target.value);
    } else if (vehInpRad.checked) {
        fetchSrch(vehInpRad.value, e.target.value);
    } else {
        fetchSrch(filmsInpRad.value, e.target.value);
    }
});

// fetch when clicking radio buts
for (let i = 0; i < radButs.length; i++) {
    radButs[i].addEventListener('click', function (e) {
        if (srchInp.value.length) {
            fetchSrch(e.target.value, srchInp.value);
        }
    })
}

// fetch with search

function fetchSrch(url, val) {
    fetch('https://swapi.dev/api/' + url + '/?search=' + val)
        .then((response) => response.json())
        .then((response) => drawSrchEnt(response.results));
}

// draw search results

function drawSrchEnt(arr) {
    srchField.innerHTML = '';
    arr.map(el => srchField.innerHTML += el.title ? el.title + '<br/>' : el.name + '<br/>');
}