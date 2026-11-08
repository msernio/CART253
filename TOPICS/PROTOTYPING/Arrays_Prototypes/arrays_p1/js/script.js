/**
 * Arrays Prototype 1
 * Mark Sernio
 * 
 * One flower on the Canvas. When the user clicks any of the six petals on the flower,
 * it will make the petal drop off the flower. If the user wants to reset the flower,
 * they can click the space bar and that will reload the page.
 * 
 * Uses:
 * Based off my Functions P3
 * p5.js
 * https://p5js.org
 */

"use strict";


let petals = [];



/**
 * Creates the canvas and builds the six petals.
*/
function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);

    petals.push(createPetal(0));
    petals.push(createPetal(60));
    petals.push(createPetal(120));
    petals.push(createPetal(180));
    petals.push(createPetal(240));
    petals.push(createPetal(300));

}


/**
 * Draws the flower as a whole (center and petals)
*/
function draw() {
    background('black');

    for (let petal of petals){
        updatePetal(petal);
        drawPetal(petal);
    }

    //  This works like - for each thing in balls, call it ball for a moment, and run these three lines on it.


    // Draws flower center
    push();
        fill('yellow');
        stroke('white');
        ellipse(250, 250, 125);
    pop();



}


// Returns a new petal object placed around the centre at the given angle.
function createPetal(angle) {
    let newPetal = {
        x: 250 + cos(angle) * 80,
        y: 250 + sin(angle) * 80,
        size: 90,
        stroke: 'white',
        fill: 'pink',
        falling: false,
        speed: 0
    };
    return newPetal;
}

// Draws whichever petal it is handed.
function drawPetal(petal) {
    push();
        fill(petal.fill);
        stroke(petal.stroke)
        ellipse(petal.x, petal.y, petal.size);
    pop();
}

// This function will return true if the mouse is inside the petal it is handed.
function isInsidePetal(petal) {
    return dist(mouseX, mouseY, petal.x, petal.y) < petal.size/2;
}

// This function will drop the petal clicked, off the flower when the mouse is Pressed.
function mousePressed() {

    for (let petal of petals) {
        if (isInsidePetal(petal)) {
            petal.falling = true;
        }
    }
    

}

// Function so if the petal is 'falling', it and move it down and out of frame to represent that.
function updatePetal(petal) {
    if (petal.falling) {
        petal.y = petal.y + 10;
    }
}

// Function that outlined when the space bar is pressed, it reloads the page to reset the flower.
function keyPressed(event) {
    console.log(event.key);

    // red circle
    if(event.key === " ") {
        location.reload();
    }
}