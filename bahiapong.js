const gameboard = document.getElementById("gameboard");
const ctx = gameboard.getContext("2d");
const BOARDHEIGHT = 600;
const BOARDWIDTH = 1000;
const PADDLESPIN = 1.5; // >= 0.O
const PADDLEFORCE = 1.1; // >= 1.O

let ball;
let PaddleL;
let PaddleR;
let scoreL = 0;
let scoreR = 0;


function clearBoard() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 1000, 600);
}

function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `${scoreL} : ${scoreR}`;
    // CHECK FOR WIN
    if (scoreL >= 10) {
        alert("Winner Argentina!")
        resetGame();
    }
    if (scoreR >= 10) {
        alert("Winner Brazil!")
        resetGame();
    }
}


function draw() {
    clearBoard();
    PaddleL.draw();
    PaddleR.draw();
    ball.draw();
}
let intervalID;

function nextTick(){
    intervalID = setTimeout(
        () => {
            PaddleL.move();
            PaddleR.move();

            ball.bounceWall();
            if (ball.bouncePaddleL(PaddleL)) score ("right");
            if (ball.bouncePaddleR(PaddleR)) score ("left");
           
            ball.move();
           
           
            draw();
            nextTick();
        }, 10 
    );

}

function score(player) {
if (player == "left") scoreL++;
if (player == "right") scoreR++;
updateScore();
resetObjects();
}

function resetGame() {
    clearInterval(intervalID);
    resetObjects();
    scoreL = 0;
    scoreR = 0;
    updateScore();
    nextTick();
    PaddleL = new Paddle(0, 0, 100, 25, "rgb(15,243,243)");
    PaddleR = new Paddle(975, 0, 100, 25, "rgb(177,236,14)");
}

function resetObjects() {
    ball = new Ball(250, 250, 5, 0, 12.5);
   
}

const  UPARROW = 38;
const  DOWNARROW = 40;
const  WKEY = 87;
const SKEY = 83;
const PADDLEVELOCITY = 5;

window.addEventListener("keydown", keyDown)
function keyDown(event) {
const key = event.keyCode;
// console.log(`KEYDOWN: ${key}`);
switch (key) {
    case (UPARROW):
    PaddleR.vy = -PADDLEVELOCITY;
    break;
case (DOWNARROW):
    PaddleR.vy = PADDLEVELOCITY;
    break;
case (WKEY):
    PaddleL.vy = -PADDLEVELOCITY;
    break;
case (SKEY):
    PaddleL.vy = PADDLEVELOCITY;
    break;
}

}
window.addEventListener("keyup", keyUp);
function keyUp(event) {
const key = event.keyCode;
// console.log(`KEYUP: ${key}`);
switch (key) {
case (UPARROW):
case (DOWNARROW):
    PaddleR.vy = 0;
    break;
case (WKEY):
case (SKEY):
    PaddleL.vy = 0;
    break;
}

}
