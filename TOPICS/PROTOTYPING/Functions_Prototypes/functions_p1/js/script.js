/**
 * Functions Prototype 1
 * Mark Sernio
 * 
 * A design which exhibits knowledge learnt from last week's class. When clicking on any of the four squares, they should change color to green, 
 * and when clicking on them again, they should return to their original red color. It should form a seemless toggle between a compeltely red and green screen.
 * Uses:
 * p5.js
 * https://p5js.org
 */

"use strict";

// All of below defines thevariables for each Square object, which contains properties 
// for its position, size, color, and current fill state.
let lSquare = {
    x: 125,
    y: 125,
    size: 250,
    fill: {
        on: "#00ff00",
        off: "#ff0000"
    },

    currentFill: "#ff0000"
}

let rSquare = {
    x: 375,
    y: 125,
    size: 250,
    fill: {
        on: "#00ff00",
        off: "#ff0000"
    },

    currentFill: "#ff0000"
}

let lbSquare = {
    x: 125,
    y: 375,
    size: 250,
    fill: {
        on: "#00ff00",
        off: "#ff0000"
    },

    currentFill: "#ff0000"
}

let rbSquare = {
    x: 375,
    y: 375,
    size: 250,
    fill: {
        on: "#00ff00",
        off: "#ff0000"
    },

    currentFill: "#ff0000"
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


function drawButton(button) {
    push();
        fill(button.currentFill);
        noStroke();
        rect(button.x-button.size/2, button.y-button.size/2, button.size, button.size);
    pop();

}

function isInside(button) {
    let left = button.x - button.size/2;
    let right = button.x + button.size/2;
    let top = button.y - button.size/2;
    let bottom = button.y + button.size/2;
    let result = (mouseX > left && mouseX < right && mouseY > top && mouseY < bottom);
    return result;
}

function toggleButton(button) {
    if (button.currentFill === button.fill.off) {
                button.currentFill = button.fill.on;
            }

            else {
                button.currentFill = button.fill.off;
            } 
}

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
        affect(lbSquare, lSquarem, rSquare, rbSquare);
    }

}



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