const rockIcon = document.getElementById('rock')
const paperIcon = document.getElementById('paper')
const scissorsIcon = document.getElementById('scissors')

const playerCurrScore = document.getElementById('playerscore')
const gameDesc = document.getElementById('gamedesc')
const playAgainBtn = document.getElementById('playagain')

const computerCurrScore = document.getElementById('computerscore')

function computerPlay() {
    const options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random()*options.length)]
}

// Function to get player selection via Prompt 
/*function playerSelection() {
    let playerSelection = prompt("Choose Rock, Paper or Scissors")
    if (playerSelection.toLowerCase() != 'rock' && playerSelection.toLowerCase() != 'paper' && playerSelection.toLowerCase() != 'scissors') {
        console.log('Invalid option. Please make your selection again.')
        return playerSelection = prompt("Invalid option. Please choose Rock, Paper or Scissors")
    } else {
        return playerSelection
    }
}*/
 
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;


rockIcon.addEventListener('click', () => {
    game('rock')
})

paperIcon.addEventListener('click', () => {
    game('paper')
})

scissorsIcon.addEventListener('click', () => {
    game('scissors')
})
 
function game(playerChoice) {


    if (!isGameOver) {
        let computerChoice = computerPlay()
        let playNode = document.createElement('h3')
        gameDesc.appendChild(playNode)
        if (computerChoice === playerChoice) {
            playerCurrScore.innerText = playerScore
            computerCurrScore.innerText = computerScore
            stats(playerChoice, computerChoice, playerScore, computerScore)
            gameDesc.innerHTML = `You both chose ${playerChoice}, it's a tie, play again`
            checkEnd()

        } else if (computerChoice === 'rock' && playerChoice === 'paper') {
            playerScore += 1;
            playerCurrScore.innerText = playerScore
            computerCurrScore.innerText = computerScore
            stats(playerChoice, computerChoice, playerScore, computerScore)
            gameDesc.innerHTML = `You chose ${playerChoice}, Computer chose ${computerChoice}. You win!`
            checkEnd()

        } else if (computerChoice === 'paper' && playerChoice === 'rock') {
            computerScore += 1;
            playerCurrScore.innerText = playerScore
            computerCurrScore.innerText = computerScore
            stats(playerChoice, computerChoice, playerScore, computerScore)
            gameDesc.innerHTML = `You chose ${playerChoice}, Computer chose ${computerChoice}. You lose!`
            checkEnd()

        } else if (computerChoice === 'scissors' && playerChoice === 'paper') {
            computerScore += 1;
            playerCurrScore.innerText = playerScore
            computerCurrScore.innerText = computerScore
            stats(playerChoice, computerChoice, playerScore, computerScore)
            gameDesc.innerHTML = `You chose ${playerChoice}, Computer chose ${computerChoice}. You lose!`
            checkEnd()

        } else if (computerChoice === 'scissors' && playerChoice === 'rock') {
            playerScore += 1;
            playerCurrScore.innerText = playerScore
            computerCurrScore.innerText = computerScore
            stats(playerChoice, computerChoice, playerScore, computerScore)
            gameDesc.innerHTML = `You chose ${playerChoice}, Computer chose ${computerChoice}. You win!`
            checkEnd()

        } else if (computerChoice === 'rock' && playerChoice === 'scissors') {
            computerScore += 1;
            playerCurrScore.innerText = playerScore
            computerCurrScore.innerText = computerScore
            stats(playerChoice, computerChoice, playerScore, computerScore)
            gameDesc.innerHTML = `You chose ${playerChoice}, Computer chose ${computerChoice}. You lose!`
                        checkEnd()

        } else if (computerChoice === 'paper' && playerChoice === 'scissors') {
            playerScore += 1;
            playerCurrScore.innerText = playerScore
            computerCurrScore.innerText = computerScore
            stats(playerChoice, computerChoice, playerScore, computerScore)
            gameDesc.innerHTML = `You chose ${playerChoice}, Computer chose ${computerChoice}. You win!`
            checkEnd()
        }
    

   
    }
}

function checkEnd() {
 if (playerScore == 5 || computerScore == 5) {
     isGameOver = true;
     playAgainBtn.classList.remove('hidden')
    if (computerScore == 5) {
        gameDesc.innerHTML = ('Computer Wins!')
    } else {
        gameDesc.innerHTML = ('Congratulation, you won!!')
     }
 }
}

playAgainBtn.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    isGameOver = false;
    playAgainBtn.classList.add('hidden')
    playerCurrScore.innerText = playerScore
    computerCurrScore.innerText = computerScore
    stats(playerChoice, computerChoice, playerScore, computerScore)
    game()
}
)

function stats(playerChoice, computerChoice, playerScore, computerScore) {
            console.log(`Your choice: ${playerChoice}`)
            console.log(`Computer choice: ${computerChoice}`)
            console.log(`Your points: ${playerScore}`)
            console.log(`Computer points: ${computerScore}`)
}

