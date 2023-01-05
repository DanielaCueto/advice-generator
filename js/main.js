'use strict'

const numberOfAdvice = document.querySelector('.js-numberofAdvice')
console.log(numberOfAdvice);
const textAdvice = document.querySelector('.js-advice')
console.log(textAdvice);
const diceContentor = document.querySelector('.js-contentorEvent')
console.log(diceContentor);


function generateAdvice (event){
    console.log(event);
    const clicked = event.currentTarget
    console.log(clicked);

}


diceContentor.addEventListener('click', generateAdvice)