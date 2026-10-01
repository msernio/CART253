/**
 * Prototype 3 - Variables Prototypes
 * Mark Sernio
 * 
 * A prototype designed to build on functions we learnt in Week 3 Class surrounding variables. In particular, this one focuses on using the random function what can be down with that.
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
    r:100,
    g:100,
    b:100
}


/**
 * DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(750, 750);

}


/**
 * DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255, 100, 100);

    // Top left Box
    push()
    fill(box.r, box.g, box.b);
    noStroke();
    square(box.x, box.y, box.size);
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
    square(box.x+371.45, box.y+371.45, box.size);
    pop()

    // Bottom Left Box
    push()
    fill(box.r, box.g, box.b);
    noStroke();
    square(box.x, box.y+371.45, box.size);
    pop()

}