let useScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

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


    //Draw Game
    if(userChoice === compChoice){
        drawGame();
    } else {
       let userWin = true;
       if(userChoice === "rock"){
           //scissors, paper
           userWin = compChoice === "paper" ? false : true;
       }else if(userChoice === "paper"){
           //rock, scissors
           userWin = compChoice === "scissors" ? false : true;
        } else {
           //rock, paper
           userWin = compChoice === "rock" ? false : true;
       }
       showWinner(userWin);
    }
};

const drawGame = () => {
    console.log("game was draw");
};

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