
let hole = 1;
let activeStroke = 0;
let strokes = 0;
let rowHeader = `<th>STROKE</th>`;
let frontRow = rowHeader;
let backRow = rowHeader;

let currentHole = document.getElementById("current-hole");

let currentStrokes = document.getElementById("current-strokes");

let totalStrokes = document.getElementById("total-strokes");

let frontNine = document.getElementById("front-nine");

let backNine = document.getElementById("back-nine");

let gameOver = document.getElementById("buttons");

console.log(frontNine);

function removeStroke() {
    activeStroke=activeStroke - 1;
    currentStrokes.innerHTML = activeStroke;
}

function addStroke() {
    activeStroke=activeStroke + 1;
    currentStrokes.innerHTML = activeStroke;
}

function saveStroke() {
    strokes += activeStroke
    console.log(strokes)
    totalStrokes.innerHTML = strokes;
    if (hole < 10) {
        let newColumn = `<td>${activeStroke}</td>`; 
        frontRow += newColumn;
        frontNine.innerHTML = frontRow;
   } else {
        if(hole < 18){
            let newColumn = `<td>${activeStroke}</td>`; 
            backRow += newColumn;
            backNine.innerHTML = backRow;
        } else {
            let newColumn = `<td>${activeStroke}</td>`; 
            backRow += newColumn;
            backNine.innerHTML = backRow;
            hole = 17;
            gameOver.innerHTML = `<div class="row mt-5 mb-5">
            <div class="d-grid col-4 mx-auto">
              <button class="btn btn-primary btn-lg"> <i class="fa-solid fa-award"></i> GREAT GAME!
              </button>
            </div>
          </div>`;
        }
    }

    hole += 1;
    currentHole.innerHTML = hole;
    activeStroke = 0;
    currentStrokes.innerHTML = activeStroke;
}