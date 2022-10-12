const p1Button = document.querySelector("#p1Score")
const p1Score = document.querySelector("#p1")
p1Button.addEventListener('click', function () {
    p1Score.innerText = +p1Score.innerText + 1

})