let useScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    const options = ["rock", "paper" , "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice =",compChoice);


    //Game Logic
    if(userChoice === compChoice){
        drawGame();
    } else {
       let userWin;
       if(userChoice === "rock"){
           //scissors, paper
           userWin = compChoice !== "paper";
       }else if(userChoice === "paper"){
           //rock, scissors
           userWin = compChoice !== "scissors";
        } else {
           //rock, paper
           userWin = compChoice !== "rock";
       }
       showWinner(userWin);
    }
};

//Draw Game
const drawGame = () => {
    console.log("game was draw");
};

//Display Winner
const showWinner = (userWin) => {
    if(userWin) {
        console.log("You Win!");
    } else {
        console.log("You Lose!");
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});