let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector(".user-score");
const compScorePara = document.querySelector(".comp-score");

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
       showWinner(userWin, userChoice, compChoice);
    }
};

//Draw Game
const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game Draw, Play Again!"
    msg.style.backgroundColor = "#081b31";
};

//Display Winner
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} Beats comp's ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lost! Comp's ${compChoice} Beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});