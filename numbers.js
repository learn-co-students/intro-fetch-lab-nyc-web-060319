// Write your numbers code in this file!
const factsAboutOne = document.querySelector("#number-one");
factsAboutOne.addEventListener("click", factsAboutOneHandler);

const pickANumber = document.querySelector("#pick-a-number");
pickANumber.addEventListener("change", pickANumberHandler);

document.addEventListener("DOMContentLoaded", failToStudyHistoryHandler);


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

function failToStudyHistoryHandler(event) {
    
}