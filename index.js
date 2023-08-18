const choices = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

function updateScore(winner) {
    if (winner === 'Player') {
        playerScore++;
        playerScoreLabel.textContent = `Player: ${playerScore}`;
    } else if (winner === 'Computer') {
        computerScore++;
        computerScoreLabel.textContent = `Computer: ${computerScore}`;
    } else {
        playerScoreLabel.textContent = `Player: ${playerScore}`;
        computerScoreLabel.textContent = `Computer: ${computerScore}`;
    }

    if (playerScore === 5) {
        winnerLabel.textContent = 'Player has won!';
        buttons.forEach( (btn) => 
            btn.removeEventListener('click', btnHandler
        ));
    } else if (computerScore === 5) {
        winnerLabel.textContent = 'Computer has won!';
        buttons.forEach( (btn) => btn.removeEventListener('click', btnHandler));
    }
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(choice) {
    let computerChoice = getComputerChoice();
    let playerChoice = choice.toLowerCase();
    let winner = '';

    computerChoiceLabel.textContent = `Computer choice: ${computerChoice.toUpperCase()}`;
    playerChoiceLabel.textContent = `Your choice: ${playerChoice.toUpperCase()}`;

    winner = getWinner(playerChoice, computerChoice);
    winnerLabel.textContent = `Winner: ${winner}`;

    updateScore(winner);
}

function getWinner(playerChoice, computerChoice) {
    let winner;
    let message = '';
    if (playerChoice === computerChoice) {
        message = '';
        winner = 'Draw';
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        message = 'You lose! Paper beats the rock.';
        winner = 'Computer';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        message = 'You win! Rock beats the scissors.';
        winner = 'Player';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        message = 'You win! Paper beats the rock.';
        winner = 'Player';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        message = 'You lose! Scissors beat the paper.';
        winner = 'Computer';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        message = 'You win! Scissors beat the paper.';
        winner = 'Player';
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        message = 'You lose! Rock beats the scissors.';
        winner = 'Computer';
    } 

    updateScore(winner);

    return `${winner}. ${message}`;
}

// UI
const root = document.querySelector('.root');

const title = document.createElement('h1');
title.textContent = 'Rock Paper Scissors'
root.appendChild(title);

const rockBtn = document.createElement('button');
rockBtn.setAttribute('name', 'rock');
rockBtn.innerText = 'Rock';

const paperBtn = document.createElement('button');
paperBtn.setAttribute('name', 'paper');
paperBtn.innerText = 'Paper';

const scissorsBtn = document.createElement('button');
scissorsBtn.setAttribute('name', 'scissors');
scissorsBtn.innerText = 'Scissors';

const buttons = [];
buttons.push(rockBtn, paperBtn, scissorsBtn);

let btnHandler = function(e) {
    playRound(e.target.textContent);
}

buttons.forEach( (btn) => btn.addEventListener('click', btnHandler));

root.appendChild(rockBtn);
root.appendChild(paperBtn);
root.appendChild(scissorsBtn);

const playerScoreLabel = document.createElement('h2');
root.appendChild(playerScoreLabel);

const computerScoreLabel = document.createElement('h2');
root.appendChild(computerScoreLabel);

const result = document.createElement('div');
const winnerLabel = document.createElement('h2');
const playerChoiceLabel = document.createElement('h3');
const computerChoiceLabel = document.createElement('h3');

result.appendChild(winnerLabel);
result.appendChild(playerChoiceLabel);
result.appendChild(computerChoiceLabel);

root.appendChild(result);