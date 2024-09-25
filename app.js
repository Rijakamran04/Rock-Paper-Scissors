let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const ranIdx= Math.floor(Math.random()*3);
    return options[ranIdx];
}
const drawGame = () => {
    console.log("Game is draw");
    msg.innerText = 'Game was draw. Play Again!';
    msg.style.backgroundColor = 'black';
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Loss! ${compChoice} beats your ${userChoice}`;;
        msg.style.backgroundColor = 'red';
    }
}
const playgame = (userChoice) => {
    console.log("userchoice =" ,userChoice);
    const compChoice = genComChoice();
    console.log("compchoice =" ,compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if( userChoice === 'rock'){
            userWin = compChoice === 'paper' ? false : true;
            // if(compChoice === 'paper'){
            //     userWin = false;
            // }
            // else {
            //     userWin=true; 
            // }
        }
        else if( userChoice === 'paper'){
            userWin = compChoice === 'scissors' ? false : true;
        }
        else{
        userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
    
}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice= choice.getAttribute("id");
        playgame(userChoice);
    })
});