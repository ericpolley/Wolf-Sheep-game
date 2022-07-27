function startGame() {
    gameLoop();
}
//loops is a timer
let loops = 0;
let peopleVisible = false;
let gameScore = 0;
createCharacters();
function gameLoop() {

    //change people visible to True
    peopleVisible = !peopleVisible;
    createCharacters();
    loops++;
    if(loops < 12) {
        setTimeout(gameLoop, peopleVisible ? 1000 : 3000);
    }
    else {
    alert("Game Over! You got: " + gameScore);
    }
}

function createCharacters() {
    let board = document.getElementById("board");
    let classToSet = peopleVisible ? "character visible" : "character hidden";
    for(let index = 0; index < 8; index ++) {
        board.children[index].className = classToSet;
        board.children[index].innerHTML = "";
        board.children[index].onclick = function() {
            gameScore += -2;
        }
    }
    let randomNumber = Math.floor(Math.random() * 8) +1;
    board.children[randomNumber-1].innerHTML = "";
    board.children[randomNumber-1].onclick = function() {
        gameScore++;
    }
    board.children[randomNumber-1].className = classToSet + " thief";
}