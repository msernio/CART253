/**
 * Conditional Prototypes 2
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

push();
    fill(lSquare.currentFill);
    noStroke();
    rect(lSquare.x-lSquare.size/2, lSquare.y-lSquare.size/2, lSquare.size, lSquare.size);
pop();

push();
    fill(rSquare.currentFill);
    noStroke();
    rect(rSquare.x-rSquare.size/2, rSquare.y-rSquare.size/2, rSquare.size, rSquare.size);
pop();

push();
    fill(lbSquare.currentFill);
    noStroke();
    rect(lbSquare.x-lbSquare.size/2, lbSquare.y-lbSquare.size/2, lbSquare.size, lbSquare.size);
pop();

push();
    fill(rbSquare.currentFill);
    noStroke();
    rect(rbSquare.x-rbSquare.size/2, rbSquare.y-rbSquare.size/2, rbSquare.size, rbSquare.size);
pop();

}

// Function that outlines the mousePressed event, which checks if the mouse is inside any of the four squares, 
// and if so, toggles their current fill color between red and green. Same process repeated for each sqaure.   
function mousePressed() {

    //Below are variables to define the measurements of each square to help in determining if the mouse is inside the square
    
    // Top left Sqaure
    let lTopA = lSquare.x - lSquare.size/2;
    let rTopA = lSquare.x + lSquare.size/2;
    let lBottomA = lSquare.y + lSquare.size/2;
    let rBottomA = lSquare.y - lSquare.size/2;
    let insideL = (mouseX > lTopA && mouseX < rTopA && mouseY > rBottomA && mouseY < lBottomA);

    if (insideL) {
       if (lSquare.currentFill === lSquare.fill.off) {
            lSquare.currentFill = lSquare.fill.on;
        }

        else {
            lSquare.currentFill = lSquare.fill.off;
        } 
    }


    // Top right
    let lTopB = rSquare.x - rSquare.size/2;
    let rTopB = rSquare.x + rSquare.size/2;
    let lBottomB = rSquare.y + rSquare.size/2;
    let rBottomB = rSquare.y - rSquare.size/2;
    let insideR = (mouseX > lTopB && mouseX < rTopB && mouseY > rBottomB && mouseY < lBottomB);

    if (insideR) {
        if (rSquare.currentFill === rSquare.fill.off) {
            rSquare.currentFill = rSquare.fill.on;
        }

        else {
            rSquare.currentFill = rSquare.fill.off;
        }
    }

    // Bottom left
    let lTopC = lbSquare.x - lbSquare.size/2;
    let rTopC = lbSquare.x + lbSquare.size/2;
    let lBottomC = lbSquare.y + lbSquare.size/2;
    let rBottomC = lbSquare.y - lbSquare.size/2;
    let insideLB = (mouseX > lTopC && mouseX < rTopC && mouseY > rBottomC && mouseY < lBottomC);

    if (insideLB) {
        if (lbSquare.currentFill === lbSquare.fill.off) {
            lbSquare.currentFill = lbSquare.fill.on;
        }

        else {
            lbSquare.currentFill = lbSquare.fill.off;
        }
    }


    // Bottom right
    let lTopD = rbSquare.x - rbSquare.size/2;
    let rTopD = rbSquare.x + rbSquare.size/2;
    let lBottomD = rbSquare.y + rbSquare.size/2;
    let rBottomD = rbSquare.y - rbSquare.size/2;
    let insideRB = (mouseX > lTopD && mouseX < rTopD && mouseY > rBottomD && mouseY < lBottomD);

    if (insideRB) {
        if (rbSquare.currentFill === rbSquare.fill.off) {
            rbSquare.currentFill = rbSquare.fill.on;
        }

        else {
            rbSquare.currentFill = rbSquare.fill.off;
        }
    }


}





