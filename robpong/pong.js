const gameboard = document.getElementById("gameboard");
const ctx = gameboard.getContext("2d");

let ball = nre Ball(250, 250, 1, 1, 12.5);
let paddleL = new Paddle(0, 0, 100, 25, "red");
let paddleR = new Paddle(475, 0, 100, 25, "blue");

function clearBoard() {
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 500, 500);
}

function clearBoard() {
    ctx.fillStyle = "grey";
    ctx.fillRect(0, 0, 500, 500);
}

function resetGame() {
    clearBoard();
    ball.draw();
    paddleL.draw();
    paddleR.draw();
}