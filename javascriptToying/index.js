class Player {
    constructor(name) {
        this._name = name;
        this._score = 0;
        this._wins = 0;
        this._button = null;
        this._displayScore = null;
    }
}



const scoreReset = document.querySelector("#scoreReset")
const maxScore = document.querySelector("#maxScoreSelector")
let playerCount = 0
let gameOver = false
let maxScoreSelected = false
let playerList = {}

function createPlayer(playerName) {
    let player = new Player(playerName)
    return player
}

function score(scoringPlayer) {
    console.log(scoringPlayer + " scored 1 point")
    console.log(scoringPlayer._displayScore + " scored 2 point")
    console.log(scoringPlayer._name + " scored 3 point")
    console.log(scoringPlayer._displayScore.innerText)
    if (!gameOver && maxScoreSelected) {
        scoringPlayer._displayScore.innerText = +scoringPlayer._displayScore.innerText + 1
        console.log(parseInt(scoringPlayer._displayScore.innerText) + 1)
        if (+maxScore.value === +scoringPlayer._displayScore.innerText) {
            gameOver = true
            //failingPlayer.displayScore.classList.add('red')
            scoringPlayer._displayScore.classList.add('green')
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

    //create a new player
    let playerName = "player" + playerCount
    //add player to playerlist
    playerList[playerName] = createPlayer(playerName)

    draggable.id = playerName
    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');

    playerList[playerName]._button = document.querySelector("#" + playerName)
    playerList[playerName]._displayScore = document.querySelector("#p2")

    playerList[playerName]._button.addEventListener('click', function () {
        console.log(playerName + "scored")
        score(playerList[playerName]) //score(scoringPlayer, failingPlayer)
    })
}

maxScore.addEventListener('change', function () {
    for (const key in playerList) {
        playerList[key]._displayScore.innerText = 0
        playerList[key]._displayScore.classList.remove('green', 'red')
    }
    gameOver = false
    maxScoreSelected = true
})

scoreReset.addEventListener('click', function () {
    for (const key in playerList) {
        playerList[key]._displayScore.innerText = 0
        playerList[key]._displayScore.classList.remove('green', 'red')
    }
    gameOver = false
})