const p1Button = document.querySelector("#p1Score")
const p1Score = document.querySelector("#p1")
const p2Button = document.querySelector("#p2Score")
const p2Score = document.querySelector("#p2")
const scoreReset = document.querySelector("#scoreReset")

p1Button.addEventListener('click', function () {
    p1Score.innerText = +p1Score.innerText + 1
})

p2Button.addEventListener('click', function () {
    p2Score.innerText = +p2Score.innerText + 1
})

scoreReset.addEventListener('click', function () {
    p2Score.innerText = 0
    p1Score.innerText = 0
})