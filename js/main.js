'use strict';
//hacer una función con una llamada con FETCH para recoger el nombre de la usuaria
//recoge el nombre y lo pinta en una lista ordenada, separando cada letra en un li

const inputEl = document.querySelector(".nickName");

const btnEl = document.querySelector(".btn");

const listEl = document.querySelector(".container");


function userName(event) {
    event.preventDefault();
    let inputValue = inputEl.value;
    fetch(`https://api.github.com/users/${inputValue}`)
    .then(function(response) {
       
        return response.json();
    })
    .then(function(data) {
        const fullName = data.name.split(" ");
        const justName = fullName[0];
        console.log(data.name);
        console.log(fullName);
        console.log(justName);

        let name = '';
        for (let i = 0; i < justName.length; i++) {
            name += `<ol><li>${justName[i]}</li></ol>`;
        }
        listEl.innerHTML = name;
});
};

btnEl.addEventListener('click', userName);