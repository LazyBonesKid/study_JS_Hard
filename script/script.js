'use strict';
let
body = document.querySelector('body'),
button = document.querySelector('button'),
h1 = document.querySelector('h1'),
color;


button.addEventListener('click', newColor);
function newColor() {
    color = '#' + Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = color;
    h1.textContent = color;

}