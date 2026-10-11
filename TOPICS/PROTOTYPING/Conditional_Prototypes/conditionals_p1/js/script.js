/**
 * Conditional Prototypes 1
 * Mark Sernio
 * 
 * A design which exhibits knowledge learnt from last week's class. When hovering the mouse over the circle, it should change color to a lighter shade of green, 
 * and when the mouse is moved away, it should return to its original color.
 * Uses:
 * p5.js
 * https://p5js.org
 */

"use strict";

// Defined variables for width and height of the Canvas.
let width = 500;
let height = 500;

// Variable for the circle object, which contains properties for its position, size, color, and current fill state.
let circle = {
    x: width/4,
    y: height/4,
    size: 90,
    r: 255,
    g: 0,
    b: 0,

    lightFill: "#1ce21c",
    normalFill: "#ff0000",

    currentFill: "#ff0000"
}


/**
 * Sets up the canvas for the sketch.
*/
function setup() {
    createCanvas(width, height);
}


/**
 * Draws the background and creates the 4 circles, as well as their colour, position and size realtive to the Width and Height for the Canvas.
 * It also defines the code distance parameters for the circles.
*/
function draw() {
    background(0);

    let distance = dist(circle.x, circle.y, mouseX, mouseY);


    push();
        fill(circle.currentFill);
        ellipse(circle.x, circle.y, circle.size, circle.size);

        fill(circle.currentFill);
        ellipse(circle.x+ width/2, circle.y, circle.size, circle.size);

        fill(circle.currentFill);
        ellipse(circle.x+ width/2, circle.y+ height/2, circle.size, circle.size);

        fill(circle.currentFill);
        ellipse(circle.x, circle.y+ height/2, circle.size, circle.size);
    pop();

    if(distance < circle.size/2) {
        circle.currentFill = circle.lightFill;
    }

    else {
        circle.currentFill = circle.normalFill;
    }

}


