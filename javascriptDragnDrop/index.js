const scoreReset = document.querySelector("#scoreReset")
const maxScore = document.querySelector("#maxScoreSelector")
let gameOver = false
let maxScoreSelected = false

const player1 = {
    button: document.querySelector("#p1Score"),
    displayScore: document.querySelector("#p1"),
    score: 0
}

const player2 = {
    button: document.querySelector("#p2Score"),
    displayScore: document.querySelector("#p2"),
    score: 0
}

player1.button.addEventListener('click', function () {
    score(player1, player2) //score(scoringPlayer, failingPlayer)
})

player2.button.addEventListener('click', function () {
    score(player2, player1) //score(scoringPlayer, failingPlayer)
})

scoreReset.addEventListener('click', function () {
    player2.displayScore.innerText = 0
    player1.displayScore.innerText = 0
    player1.displayScore.classList.remove('green', 'red')
    player2.displayScore.classList.remove('green', 'red')
    gameOver = false
})

maxScore.addEventListener('change', function () {
    player2.displayScore.innerText = 0
    player1.displayScore.innerText = 0
    player1.displayScore.classList.remove('green', 'red')
    player2.displayScore.classList.remove('green', 'red')
    gameOver = false
    maxScoreSelected = true
})

function score(scoringPlayer, failingPlayer) {
    if (!gameOver && maxScoreSelected) {
        scoringPlayer.displayScore.innerText = +scoringPlayer.displayScore.innerText + 1
        if (+maxScore.value === +scoringPlayer.displayScore.innerText) {
            gameOver = true
            failingPlayer.displayScore.classList.add('red')
            scoringPlayer.displayScore.classList.add('green')
        }
    }
}