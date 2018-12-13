'use strict';
//hacer una función con una llamada con FETCH para recoger el nombre de la usuaria
//recoge el nombre y lo pinta en una lista ordenada, separando cada letra en un li

const inputEl = document.querySelector(".nickName");

const btnEl = document.querySelector(".btn");

const container = document.querySelector(".container");


function userName() {
    event.preventDefault();
    fetch('https://api.github.com/users/:username')
    .then(function(response) {
        console.log('response',response);
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        console.log(data.name);
        
})
}
btnEl.addEventListener('click', userName);