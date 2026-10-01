/**
 * Prototype 2 - Variables Prototypes
 * Mark Sernio
 * 
 * A prototype designed to build on functions we learnt in Week 3 Class surrounding variables. In particular, this one focuses on using the random function and what can be down with that.
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 */

"use strict";

/**
 * Variables that outline various properties such as the ball and its x, y, and rgb values, as well as the min and max position for the ball to be constrained within.
*/

let ball = {
     x:375,
     y:550,
     size:50,
     r:255,
     g:0,
     b:0
}

let posX = {
    min: 200,
    max: 550
}

let posY = {
    min: 200,
    max: 550
}

// This setup will just create my canvas for the Prototype

function setup() {
    createCanvas(750, 750);

}

// This draw function will colour the background, call another function (draw box) and then define the properties of the ball and what I want it to do.


function draw() {
    background(255, 144, 9);
    
    drawBox();

    fill(ball.r, ball.g, ball.b);
    noStroke();
    ellipse(ball.x, ball.y, ball.size, ball.size);
    ball.x = random(posX.min, posX.max);
    ball.y = random(posY.min, posY.max);

}



function drawBox() {
    fill(0, 0, 0);
    noStroke();
    square(175, 175, 400);

}
