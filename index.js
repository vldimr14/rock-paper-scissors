const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let playerChoice;

    do {
        playerChoice = prompt('Your choice: ').toLowerCase();
        if (!choices.includes(playerChoice)) {
            console.log("No such choice!");
        }
    }
    while (!choices.includes(playerChoice));

    return playerChoice;
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    console.log('Computer choice is ' + computerChoice);
    console.log(getWinner(playerChoice, computerChoice));
}

function getWinner(playerChoice, computerChoice) {
    let message = '';
    if (playerChoice === computerChoice) {
        message = 'Draw!';
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        message = 'You lose! Paper beats the rock.';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        message = 'You win! Rock beats the scissors.';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        message = 'You win! Paper beats the rock.';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        message = 'You lose! Scissors beat the paper.';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        message = 'You win! Scissors beat the paper.';
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        message = 'You lose! Rock beats the scissors.';
    } 
    return message;
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        playRound();
    }
}

game();