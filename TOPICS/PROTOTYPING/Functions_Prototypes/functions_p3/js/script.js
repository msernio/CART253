/**
 * Functions Prototype 3 
 * Mark Sernio
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    background('black');
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    drawFlower(250, 250, 200, 'pink');
}

function drawPetal(x, y, size, colour) {
    push();
        fill(colour);
        noStroke();
        ellipse(x, y, size);
    pop();
}

function drawFlower(x, y, size, colour) {
    drawPetal(x - size / 2, y, size, colour); // left
    drawPetal(x + size / 2, y, size, colour); // right
    drawPetal(x, y - size / 2, size, colour); // top
    drawPetal(x, y + size / 2, size, colour); // bottom
    drawPetal(x, y, size+10, 'white'); // middle

}

function mousePressed() {

}
