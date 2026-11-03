/**
 * Function Prototype 2 - Mark Sernio
 * 
 * Three circles react to how close the mouse is. Each circle swells and shifts colour as the mouse approaches.
 * Built using functions with parameters and return values - based on what was learned in class.
 *
 * Uses:
 * Based on the class-six example code (calculateCloseness and complexCircles_P)
 * p5.js
 * https://p5js.org
 */

"use strict";

let shape1;
let shape2;
let shape3;

/**
 * Creates the canvas and builds the three shapes.
 */

function setup() {
    createCanvas(500,500);

    // Same function, three different positions
    shape1 = createShape(100, 250);
    shape2 = createShape(250, 250);
    shape3 = createShape(400, 250); 

}


/**
 * Draws the canvas and draws each shape from the defined functions.
 */

function draw() {
    background('black');

    drawShape(shape1);
    drawShape(shape2);
    drawShape(shape3);

}


// Builds and returns a shape object.
function createShape(x, y){

    let newShape = {
        x: x,
        y: y,
        size: 60,
    }

    return newShape;

}

// Draws the shape it is given. It swells and changes colour depending on how close the mouse is.
function drawShape(shape){
    let closeness = getCloseness(shape);
    push();
        fill(255, 204, closeness);
        noStroke();
        ellipse(shape.x, shape.y, shape.size + closeness / 3);
    pop();
}

// Returns a number from 0 (mouse is far away) to 255 (mouse is on the shape). This number is used to change the colour and size of the shape. 
// I also didn't constrain it, so it can go negative beyond 250px which adds this cool effect when moving the mouse around and past those values..”
function getCloseness(shape) {
    let d = dist(mouseX, mouseY, shape.x, shape.y);
    let closeness = map(d, 0, 250, 255, 0);
    return closeness;
}