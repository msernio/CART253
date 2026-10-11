/**
 * Conditional Prototypes 3
 * Mark Sernio
 * 
 * An a design which exhibits knowledge learnt from last week's class. If you place your mouse in the middle, 
 * the two boxes on each side should push aware from the mouse, and if you move the mouse away, the boxes should return to their original positions.
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 */


"use strict";

let rBox = {
    x: 300,
    y: 0,
    size: 250,
    length: 200,
    width: 500,
    fill:"#00ff00",

    homeX: 300, // stationary position of the box
    hideX: 500, // hidden position of the box
    targetX: 300,
    nearDistance: 40

}

let lBox = {
    x: 0,
    y: 0,
    size: 250,
    length: 200,
    width: 500,
    fill:"#00ff00",

    homeX: 0, 
    hideX: -200, 
    targetX: 0,
    nearDistance: 40
}

/**
 * Sets up the canvas for the sketch.
 */
function setup() {
    createCanvas(500,500);

}


/**
 * Draws the background and the two boxes, and houses the code that moves the boxes away from the mouse when it is in the middle of the canvas.
*/
function draw() {
    background("#ff0000");

    // Left box is pushed by the mouse, fenced between hidden and home.
    lBox.targetX = mouseX - lBox.length - lBox.nearDistance;
    lBox.targetX = constrain(lBox.targetX, lBox.hideX, lBox.homeX);

    // Right box is pushed by the mouse, fenced between hidden and home.
    rBox.targetX = mouseX + rBox.nearDistance;
    rBox.targetX = constrain(rBox.targetX, rBox.homeX, rBox.hideX);


    // This code moves the boxes toward their target positions (targetX)
    lBox.x = lBox.x + (lBox.targetX - lBox.x) / 10;
    rBox.x = rBox.x + (rBox.targetX - rBox.x) / 10;

    // Draw the boxes
    push()
    fill(rBox.fill);
    noStroke();
    rect(rBox.x, rBox.y, rBox.length, rBox.width);
    pop()

    push()
    fill(lBox.fill);
    noStroke();
    rect(lBox.x, lBox.y, lBox.length, lBox.width);
    pop()
}