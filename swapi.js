// Write your swapi code in this file!
let crawlBtn = document.querySelector("#crawlBtn");
crawlBtn.addEventListener('click', getOpeningCrawl);
function getOpeningCrawl(){
    
    fetch('https://swapi.co/api/films/1/')
        .then(res => res.json())
        .then(function(json){
            document.querySelector(`#crawlDiv`).innerText = json.opening_crawl;
        });
    
    
}

let factBtn = document.querySelector('#number-one')
factBtn.addEventListener('click', getFacts);

function getFacts(){
    fetch('http://numbersapi.com/1/trivia')
    .then(res => res.text())
    .then(text => {
        document.querySelector('#one-facts').innerText = text;
    })
}

let getPlanetForm = document.querySelector('#planetForm');
getPlanetForm.addEventListener('submit', getPlanet);

function getPlanet(e){
    e.preventDefault();
    reqPlanet = document.querySelector('#planetInput').value;
    fetch(`https://swapi.co/api/planets/${reqPlanet}`)
        .then(res => res.json())
        .then(function(json){
            document.querySelector('#planetData').innerHTML = "Planet Name => "+ json.name + ", Climate:  " + json.climate;
        });
        reqPlanet.value = '';
}


function getDroids(){
   // droid1 = document.querySelector('#droid-2');
    fetch(`https://swapi.co/api/people/2/`)
    .then(res => res.json())
    .then(function (json){
        document.querySelector("#droid-2").innerHTML = json.name;
    })
}
function getDroids2(){
    // droid1 = document.querySelector('#droid-2');
     fetch(`https://swapi.co/api/people/3/`)
     .then(res => res.json())
     .then(function (json){
         document.querySelector("#droid-3").innerHTML = json.name;
     })
 }

getDroids()
getDroids2();

document.querySelector('#pick-a-number').addEventListener('change', pickANumber);

function pickANumber(e){
    const div = document.querySelector('#random-math-fact');
    const inputValue = e.target.value;
    if(Number.parseInt(inputValue)){
        fetch(`http://numbersapi.com/${inputValue}/trivia`)
        .then(res => res.text())
        .then(function(json){
            div.innerText = json;
        })
    }
    div.innerText = 'please enter a valid number';
    
}



function yearFact(){
    const div = document.getElementById('year-history');
    let  year = 1951;
    setInterval(function(){ 
    year -= 1;
    fetch(`http://numbersapi.com/${year}/year`)
    .then(res => res.text())
    .then(function(json){
        div.innerText = json;
    }) }, 5000);
}

yearFact();