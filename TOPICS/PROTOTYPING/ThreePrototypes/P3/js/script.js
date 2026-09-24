/**
 * P3 - Weird
 * Mark Sernio
 * 
 * An image designed to be 'weird' in my interpretation, based on what I learnt after Week 2 and testing that code. I unfortuantely did run
 * out of time to add more details to the image, but I did want to submit it as is.
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 */

"use strict";

// Create the Canvas to set up the frame

function setup() {
    createCanvas(750, 750);
}


/**
 * This draw function colours the background and calls the drawFace function to create a face and roate it.
*/
function draw() {
    background(253,216,8);

    push();
    translate(width/2, height/2);
    rotate(PI);
    drawFace();
    pop();

}


// Draws the image of the face
function drawFace() {
    fill(253,216,8);
    stroke(128,0,128);
    strokeWeight(5);

    // Hair lines
    line(-10, 100, -30, 140);
    line(0, 100, 0, 150);
    line(10, 100, 30, 140);

    // Face outline
    ellipse(0, 0, 180, 180);

    // Eyes
    fill(128, 0, 128);
    circle(-40, -25, 12);
    circle(40, -25, 12);

    // Mouth
    noFill();
    line(-30, 20, 30, 20);

}