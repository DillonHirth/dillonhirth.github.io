const scoreReset = document.querySelector("#scoreReset")
const maxScore = document.querySelector("#maxScoreSelector")
let gameOver = false
let maxScoreSelected = false



// player2.button.addEventListener('click', function () {
//     score(player2, player1) //score(scoringPlayer, failingPlayer)
// })



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

// select the item element
const item = document.querySelectorAll('.item');

// attach the dragstart event handler
//item.addEventListener('dragstart', dragStart);
item.forEach(item => {
    item.addEventListener('dragstart', dragStart);
})

// handle the dragstart

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    // setTimeout(() => {
    //     e.target.classList.add('hide');
    // }, 0);
}


const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}
function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.preventDefault();
    e.target.classList.remove('drag-over');
    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    let draggable = document.getElementById(id).cloneNode(true);

    draggable.id = "p2Score"
    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');

    const player2 = {
        button: document.querySelector("#p2Score"),
        displayScore: document.querySelector("#p2"),
        score: 0
    }

    const player1 = {
        button: document.querySelector("#p1Score"),
        displayScore: document.querySelector("#p1"),
        score: 0
    }
    player2.button.addEventListener('click', function () {
        score(player2, player1) //score(scoringPlayer, failingPlayer)
    })



    player1.button.addEventListener('click', function () {
        score(player1, player2) //score(scoringPlayer, failingPlayer)
    })


    maxScore.addEventListener('change', function () {
        player2.displayScore.innerText = 0
        player1.displayScore.innerText = 0
        player1.displayScore.classList.remove('green', 'red')
        player2.displayScore.classList.remove('green', 'red')
        gameOver = false
        maxScoreSelected = true
    })

    scoreReset.addEventListener('click', function () {
        player2.displayScore.innerText = 0
        player1.displayScore.innerText = 0
        player1.displayScore.classList.remove('green', 'red')
        player2.displayScore.classList.remove('green', 'red')
        gameOver = false
    })


}