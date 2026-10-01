/**
 * Prototype 3 - Variables Prototypes
 * Mark Sernio
 * 
 * A prototype designed to build on functions we learnt in Week 3 Class surrounding variables. In particular, this one focuses on using the constraint function but also my first time getting things to rotate and also simultaneously grow.
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 */

"use strict";

let box = {
    x:137.25,
    y:137.25,
    size:100,
    sizeMax:300,
    sizeMin:100,
    angle: 0,
    r:100,
    g:100,
    b:100
}

let ball = {
     x:375,
     y:550,
     size:50,
     r:255,
     g:0,
     b:0
}

/**
 * This setup draws the canvas and sets the angle mode to degrees so the Draw function can roate it correctly.
*/
function setup() {
    createCanvas(750, 750);
    angleMode(DEGREES);
}


/**
 * This draw function draws the 4 boxes but also gets them to rotate and size up.
*/

function draw() {
    background(255, 100, 100);


    // Top left Box
    push()
    fill(box.r, box.g, box.b);
    noStroke();
    rectMode(CENTER);
    translate(box.x + box.size/2, box.y + box.size/2);
    rotate(box.angle);
    square(0, 0, box.size);
    pop()
    

    // Top Right Box
    push()
    fill(box.r, box.g, box.b);
    noStroke();
    square(box.x+371.45, box.y, box.size);
    pop()

    // Bottom Right Box
    push()
    fill(box.r, box.g, box.b);
    noStroke();
    rectMode(CENTER);
    translate(box.x + 371.45 + box.size/2, box.y + 371.45 + box.size/2);
    rotate(box.angle);
    square(0, 0, box.size);
    pop()

    // Bottom Left Box
    push()
    fill(box.r, box.g, box.b);
    noStroke();
    square(box.x, box.y+371.45, box.size);
    pop()

    // constrains the amount the boxes grow
    box.size = box.size+1;
    box.size = constrain(box.size, box.sizeMin, box.sizeMax);
    box.angle = box.angle + 1;


}