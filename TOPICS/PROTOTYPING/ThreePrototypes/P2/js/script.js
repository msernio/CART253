/**
 * P2 - Abstract
 * Mark Sernio
 * 
 * An image deisgned to be 'Abstract' based on what I learnt after Week 2 and testing that code.
 * 
 *  Uses:
 * p5.js
 * https://p5js.org
 */
*/

"use strict";


// Create the Canvas to set up the frame

function setup() {
    createCanvas(750, 750);

}


// function to colour the Canvas and call all my draw functions to create the image.
function draw() {
    // call the function - run the code
    background(0,0,161);

    drawRow1();
    drawRow2();
    drawRow3();
    drawRect1();
    drawRect2();
    drawRect3();
    drawRect4();
    drawRect5();

}


// functions to the Rectangle that covers the Circles.
function drawRect1() {
    push();
    fill(0,0,161);
    stroke(0,0,161);
    rect(250, 380, 250, 100);
    pop();

}

function drawRect2() {
    push();
    fill(0,0,161);
    stroke(0,0,161);
    rect(490, 0, 150, 500);
    pop();

}

function drawRect3() {
    push();
    fill(0,0,161);
    stroke(0,0,161);
    rect(0, 130, 250, 100);
    pop();

}

function drawRect4() {
    push();
    fill(0,0,161);
    stroke(0,0,161);
    rect(380, 500, 120, 250);
    pop();

}


function drawRect5() {
    push();
    fill(0,0,161);
    stroke(0,0,161);
    rect(0, 250, 250, 130);
    pop();

}



 // function to draw the rows of Circles.
function drawRow1() {
    push();
    fill(255, 144, 9);
    stroke(255, 144, 9);
    ellipse(width/2, 120, 200, 200);
    ellipse(135, 120, 200, 200);
    ellipse(620, 120, 200, 200);
    pop();

}

function drawRow2() {
    push();
    fill(255, 144, 9);
    stroke(255, 144, 9);
    ellipse(width/2, height/2, 200, 200);
    ellipse(135, height/2, 200, 200);
    ellipse(620, height/2, 200, 200);
    pop();

}

function drawRow3() {
    push();
    fill(255, 144, 9);
    stroke(255, 144, 9);
    ellipse(width/2, 625, 200, 200);
    ellipse(135, 625, 200, 200);
    ellipse(620, 625, 200, 200);
    pop();

}

