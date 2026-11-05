/**
 * Lines Challenge
 * Mark Sernio & Owen Dobson
 * 
 * A series of lines across the canvas
 */

"use strict";

let strokeValue = 0;
let y = undefined;
let x = 0;

let xTwo = undefined;
let yTwo = 0;

let i= undefined;


/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);

    y = height;
    xTwo = width;

    colorMode(HSB, 100);

    push()
    for (let i = 0; i <= width; i++) {
        let hueValue = map(i, 0, width, 67, 33);
        stroke(hueValue, 100, 100);
        line(i, 0, i, height);
    }
    pop()

}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {

    strokeValue = 0;
    x = 0;
    
    // vertical lines  
    while(strokeValue < 255) {
        strokeValue += 25;
        x += 50;

        stroke(strokeValue);
        line(x, 0, x, y);   
        
    }


    strokeValue = 0;
    yTwo = 0;

    // horizontal lines
    while(strokeValue <= 255) {
        strokeValue += 25;
        yTwo += 50;

        stroke(strokeValue);
        line(0, yTwo, xTwo, yTwo);   
        
    }
 
       
}
