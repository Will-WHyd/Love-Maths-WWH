// wait for DIN ti fubusg kiau=dubg before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})


/**
 * the main game "loop" called when the script is first loaded, 
 * and after user's answer is processed
 */
function runGame (gameType) {
    // creates 2 random numbers
    let num1 = Math.ceil(Math.random()*25);
    let num2 = Math.ceil(Math.random()*25);

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore () {

}

function incrementWrongAnswer () {

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    

}

function displaySubtractionQuestion(){
    
}

function displayMultiplyQuestion(){
    
}