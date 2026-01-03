let useScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const choiceId = choice.getAttribute("id");
        console.log(choiceId ,"was clicked");
    });
});