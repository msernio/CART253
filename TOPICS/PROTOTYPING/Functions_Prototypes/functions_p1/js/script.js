/**
 * Functions Prototype 1
 * Mark Sernio
 * 
 * When clicking on any of the four squares, they should change colour and set off a 
 * chain reaction that changes the colour of the other squares in a visually appealing way. 
 * This animation should occur for each and any of the squares pressed.
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 */

"use strict";

// All of below defines the variables for each Square object, which contains properties 
// for its position, size, color, and current fill state.
let lSquare = {
    x: 125,
    y: 125,
    size: 250,
    fill: {
        on: "#ff8000",
        off: "#0000ff"
    },

    currentFill: "#ff8000"
}

let rSquare = {
    x: 375,
    y: 125,
    size: 250,
    fill: {
        on: "#ff8000",
        off: "#0000ff"
    },

    currentFill: "#ff8000"
}

let lbSquare = {
    x: 125,
    y: 375,
    size: 250,
    fill: {
        on: "#ff8000",
        off: "#0000ff"
    },

    currentFill: "#ff8000"
}

let rbSquare = {
    x: 375,
    y: 375,
    size: 250,
    fill: {
        on: "#ff8000",
        off: "#0000ff"
    },

    currentFill: "#ff8000"
}



/**
 * Sets up the canvas for the sketch.
*/
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws each square and fills them with their current fill color, as well as their position and size realtive to the Width and Height for the Canvas.
*/
function draw() {
    background(100, 100, 255);

    drawButton(lSquare);
    drawButton(rSquare);
    drawButton(lbSquare);
    drawButton(rbSquare);  

}

// Draws a square based on the properties of the button object passed into the function.
function drawButton(button) {
    push();
        fill(button.currentFill);
        noStroke();
        rect(button.x-button.size/2, button.y-button.size/2, button.size, button.size);
    pop();

}


// Function thats checks if the mouse is currently positioned inside the boundaries of the given button.
function isInside(button) {
    let left = button.x - button.size/2;
    let right = button.x + button.size/2;
    let top = button.y - button.size/2;
    let bottom = button.y + button.size/2;
    let result = (mouseX > left && mouseX < right && mouseY > top && mouseY < bottom);
    return result;
}

// Function that toggles the current fill color of the given button object between its on and off states.
function toggleButton(button) {
    if (button.currentFill === button.fill.off) {
                button.currentFill = button.fill.on;
            }

            else {
                button.currentFill = button.fill.off;
            } 
}


// Function that controls the behaviour of the toggle when clicked, such as what Sqaures will be affected based on the initial square clicked.
function mousePressed() {
    if (isInside(lSquare)) {
        toggleButton(lSquare);
        affect(lSquare, rSquare, rbSquare, lbSquare);
    }

    if (isInside(rSquare)) {
        toggleButton(rSquare);
        affect(rSquare, rbSquare, lbSquare, lSquare);
    }

    if (isInside(rbSquare)) {
        toggleButton(rbSquare);
        affect(rbSquare, lbSquare, lSquare, rSquare);

    }

    if (isInside(lbSquare)) {
        toggleButton(lbSquare);
        affect(lbSquare, lSquare, rSquare, rbSquare);
    }

}


// Function that creates a delay in the toggling of the other squares when one square is clicked, to create a more visually appealing/cohesive effect.
function affect(clicked, target1, target2, target3) {
    setTimeout(function() {
        toggleButton(target1);
        }, 100);
    
        setTimeout(function() {
        toggleButton(target2);
        }, 200);

        setTimeout(function() {
        toggleButton(target3);
        }, 300);

}