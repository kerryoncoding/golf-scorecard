
let hole = 1;
let activeStroke = 0;
let strokes = 0;
let rowHeader = "<th>STROKE</th>";
let row = rowHeader;

let currentHole = document.getElementById("current-hole");

let currentStrokes = document.getElementById("current-strokes");

let totalStrokes = document.getElementById("total-strokes");

let frontNine = document.getElementById("front-nine");

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
        let newColumn = "<td>${activeStroke}</td>"; 
        row += newColumn;
        console.log(row);
       frontNine.innerHTML = row;
   } else {
        //backnine
    }

  
    hole += 1;
    currentHole.innerHTML = hole;
    activeStroke = 0;
    currentStrokes.innerHTML = activeStroke;
}