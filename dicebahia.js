var cube = document.getElementById('cube');
let rolling = false;
var min = 1;
var max = 24;

cube.onclick = function() {
    var xRand = getRandom(max, min);
    var yRand = getRandom(max, min);

    if (rolling) return;
    setRolling(true);
    cube.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
    
    // console.log(getResult(xRand, yRand));
    
    setTimeout(function() {
        //your code to be executed after 1 second
        if (getResult(xRand, yRand) === 6) {
            alert("YOU WIN!");
        } else {
            alert("YOU LOSE!");
        }
        setRolling(false);
    }, 4000 ); //4000ms = 4 seconds
}

function setRolling(state) {
    rolling = state;
    if (state) {
        cube.style.cursor = "default";
    } else {
        cube.style.cursor = "pointer";
    }
}

function getRandom(max, min) {
    return (Math.floor(Math.random()*(max-min)) + min)*90;
}

function mod(n, m) {
    return ((n % m) + m) % m;
}

function getResult(rotX, rotY) {
    let countX = mod(rotX/90, 4);
    if (countX === 1) {
        return 6;
    }
    if (countX === 3) {
        return 5;
    }
    let countY = mod(rotY/90 + countX, 4);
    return [1,4,2,3][countY];

}

