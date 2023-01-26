
let hole = 1;
let activeStroke = 0;
let Strokes = 0;

let currentHole = document.getElementById("currenthole");

let currentStrokes = document.getElementById("currentstrokes");

let totalStrokes = document.getElementById("totalstrokes");


function removeStroke() {
    activeStroke=activeStroke - 1;
    currentStrokes.innerHTML = activeStroke;
}

function addStroke() {
    activeStroke=activeStroke + 1;
    currentStrokes.innerHTML = activeStroke;
}

function saveStroke() {
    Strokes += activeStroke
    totalstrokes.innerHTML = Strokes;
    hole += 1;
    currentHole.innerHTML = hole;
    activeStroke = 0;
    currentStrokes.innerHTML = activeStroke;
}