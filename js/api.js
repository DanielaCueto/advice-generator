'use strict'
let textAdvice = document.querySelector('.js-advice')
console.log(textAdvice);
const numberOfAdvice = document.querySelector('.js-numberofAdvice')
console.log(numberOfAdvice);
const diceContentor = document.querySelector('.js-contentorEvent')
console.log(diceContentor);
const mainContentor = document.querySelector('.main')



function generateAdvice (event){
    doingFetch()
    console.log(event);
    const clicked = event.currentTarget
    //console.log(clicked);
    
    return clicked;


}


function doingFetch (){
    //mainContentor.classList.add('loading');
    fetch("https://api.adviceslip.com/advice")
    .then((response)=> 
    response.json())
   .then((data)=> {
        console.log(data.slip.advice);
        numberOfAdvice.textContent = ` ADVICE #${data.slip.id}`
        textAdvice.textContent = data.slip.advice
        //mainContentor.classList.remove('loading')

    })
}

doingFetch()

diceContentor.addEventListener('click', generateAdvice)