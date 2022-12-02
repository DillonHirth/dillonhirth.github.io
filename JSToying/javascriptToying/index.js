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
const maxScoreSelector = document.querySelector("#maxScoreSelector")
const playerCountSelector = document.querySelector("#playerCountSelector")
let playerCount = 1
let gameOver = false
let maxScoreSelected = false
let playerList = {}

function createPlayer(playerName) {
    let player = new Player(playerName)
    return player
}

function score(scoringPlayer) {
    if (!gameOver && maxScoreSelected) {
        console.log(scoringPlayer._displayScore.innerText)
        scoringPlayer._displayScore.innerText = +scoringPlayer._displayScore.innerText + 1
        if (+maxScoreSelector.value === +scoringPlayer._displayScore.innerText) {
            gameOver = true
            scoringPlayer._displayScore.classList.add('green')
            for (const key in playerList) {
                if (playerList[key] != scoringPlayer) {
                    playerList[key]._displayScore.classList.add('red')
                }
            }
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

    //create score text
    const new_buddy = `<h1>${playerName} score: <span id="${playerName}_score">${playerList[playerName]._score}</span></h1>`
    const scoreBoard = document.querySelector('#scoreDisplay')
    scoreBoard.insertAdjacentHTML('beforeend', new_buddy)


    draggable.id = playerName
    draggable.innerText = playerName
    // add it to the drop target
    e.target.appendChild(draggable);

    // display the draggable element
    draggable.classList.remove('hide');

    playerList[playerName]._button = document.querySelector("#" + playerName)
    playerList[playerName]._displayScore = document.querySelector("#" + playerName + "_score")

    playerList[playerName]._button.addEventListener('click', function () {
        score(playerList[playerName]) //score(scoringPlayer, failingPlayer)
    })
    playerCount = playerCount + 1
}

maxScoreSelector.addEventListener('change', function () {
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