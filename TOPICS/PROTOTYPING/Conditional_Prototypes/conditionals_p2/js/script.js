/**
 * Conditional Prototypes 2
 * Mark Sernio
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


let lSquare = {
    x: 125,
    y: 125,
    size: 250,
    fill: {
        on: "#00ff00",
        off: "#ff0000"
    },

    currentFill: "#ff0000"
}



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(100, 100, 255);

push();
    fill(lSquare.currentFill);
    noStroke();
    rect(lSquare.x-lSquare.size/2, lSquare.y-lSquare.size/2, lSquare.size, lSquare.size);
pop();
 
}

   function mousePressed() {
        if (lSquare.currentFill === lSquare.fill.off) {
            lSquare.currentFill = lSquare.fill.on;
        }

        else {
            lSquare.currentFill = lSquare.fill.off;
        }
   }

