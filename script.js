'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20

let highScore = 0

console.log(secretNumber);


// reset btn
const resetBtn = document.querySelector('.again');

resetBtn.addEventListener('click', function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1
    message.textContent = "Start guessing..."
    document.querySelector('.score').textContent = score
    document.body.style.backgroundColor = '#222'
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value = ""
    document.querySelector('.number').style.width = "15rem"
    console.log(secretNumber);
})

console.log(secretNumber);

const message = document.querySelector('.message')

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // when there is no input
    if (!guess) {
        message.textContent = "⛔️ No number!"
        displayMessage('⛔️ No number!')

        // when player wins
    } else if (guess === secretNumber) {
        message.textContent = "🎉 Correct Number!"
        document.body.style.backgroundColor = '#60b347'
        document.querySelector('.number').textContent = secretNumber

        document.querySelector('.number').style.width = "30rem"
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }

        // when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            message.textContent = "📈 Too high"
            score--
            document.querySelector('.score').textContent = score
        } else {
            message.textContent = ":( You Lose "
            document.querySelector('.score').textContent = 0
        }

        // when guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            message.textContent = "📈 Too low"
            score--
            document.querySelector('.score').textContent = score
        } else {
            message.textContent = ":( You Lose "
            document.querySelector('.score').textContent = 0
        }
    }
})






