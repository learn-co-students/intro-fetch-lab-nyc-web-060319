// Write your numbers code in this file!
const factsAboutOne = document.querySelector("#number-one");
factsAboutOne.addEventListener("click", factsAboutOneHandler);

const pickANumber = document.querySelector("#pick-a-number");
pickANumber.addEventListener("change", pickANumberHandler);

document.addEventListener("DOMContentLoaded", onloadedFuncs);


const allNumbersButton = document.querySelector("#all-numbers-button");
allNumbersButton.addEventListener("click", allTheNumbersHandler);

function onloadedFuncs() {
    failToStudyHistoryHandler();

}

function factsAboutOneHandler(event) {
    fetch("http://numbersapi.com/1/trivia").then(result => result.text()).then((result) => {
        const oneFacts = document.querySelector("#one-facts");
        // const newElem = document.createElement("div");
        // console.log(result);
        // newElem.innerText = result;
        oneFacts.innerText = result;
        // console.log(result.text());
        // oneFacts.appendChild(newElem);
        // oneFacts.
    });
}

function pickANumberHandler(event) {
    const randomFact = document.querySelector("#random-math-fact");
    if (Number.isNaN(parseInt(event.target.value))) {
        randomFact.innerText = "please enter a valid number";
        return;
    }
    event.preventDefault();
    // console.log(event);
    fetch(`http://numbersapi.com/${event.target.value}/trivia`).then(result => result.text()).then(result => {
        
        randomFact.innerText = result;
    });
}

let year = new Date().getFullYear();

function failToStudyHistoryHandler(event) {
    fetch(`http://numbersapi.com/${year--}/year`).then(result => result.text()).then(result => {
        const div = document.getElementById('year-history');
        div.innerText = result;
        const intervalID = window.setInterval(repeatingHistoryHandler, 5000);
        console.log("Created interval function for repeatingHistoryHandler: " + intervalID);

    });
}


function repeatingHistoryHandler() {
    fetch(`http://numbersapi.com/${year--}/year`).then(result => result.text()).then(result => {
        const div = document.getElementById('year-history');
        div.innerText = result;
    });
}

function allTheNumbersHandler(event) {
    const allTheNumbers = document.querySelector("#all-the-numbers");
    allTheNumbers.innerHTML = "";
    const allTheNumberList = document.createElement("ul");
    fetch("http://numbersapi.com/1..100")
        .then(result => result.json())
            .then(result => {
                for(let key in result) {
                    const newFact = document.createElement("li");
                    newFact.innerText = result[key];
                    allTheNumberList.appendChild(newFact);
                }
    });

    allTheNumbers.appendChild(allTheNumberList);
}