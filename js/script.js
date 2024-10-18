// wait for DIN ti fubusg kiau=dubg before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    document.getElementById("answer-box").addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            checkAnswer();
        }
    })

    runGame("addition");
})


/**
 * the main game "loop" called when the script is first loaded, 
 * and after user's answer is processed
 */
function runGame (gameType) {
    //clears the answer box
    document.getElementById("answer-box").value = "";

    //sets focus on answerbox
    document.getElementById("answer-box").focus();

    // creates 2 random numbers
    let num1 = Math.ceil(Math.random()*25);
    let num2 = Math.ceil(Math.random()*25);

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtraction") {
        displaySubtractionQuestion(num1, num2);
    } 
    
    else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}


/**
 * Checks the answer provided by the player against the result of the calculated correct answer.
 */
function checkAnswer(){
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect) {
        alert("Congrats! You got it right!");
        incrementScore();
    } else {
        alert(`Awww... you answered ${userAnswer}, but the correct answer was ${calculatedAnswer[0]}`);
        incrementWrongAnswer ();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (numbers) and operator (sign)
 * directly from the dom, and returns the correct answer
 */
function calculateCorrectAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1*operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtraction"];
    }
    
    else {
        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator}. Aborting!`;
    }

}

/**
 * Gets current score vfrom dom and increments it by 1
 */
function incrementScore () {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * Gets current wrong answer sum from dom and increments it by 1
 */
function incrementWrongAnswer () {
    let oldIncorrect = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("score").innerText = ++oldIncorrect;
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    

}

function displaySubtractionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1 > operand2? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
    
}

function displayMultiplyQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x"    
}