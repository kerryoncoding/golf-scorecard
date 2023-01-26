
let hole = 1;
let activeStroke = 0;
let Strokes = 0;

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
    activeStroke = 0;
    currentStrokes.innerHTML = activeStroke;
}