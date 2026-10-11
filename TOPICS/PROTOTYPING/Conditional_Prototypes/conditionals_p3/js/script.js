/**
 * Conditional Prototypes 3
 * Mark Sernio
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500,500);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

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
    rect(rBox.x, rBox.y, rBox.length, rBox.width);
    pop()

    push()
    fill(lBox.fill);
    rect(lBox.x, lBox.y, lBox.length, lBox.width);
    pop()
}