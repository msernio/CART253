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

let rSquare = {
    x: 375,
    y: 125,
    size: 250,
    fill: {
        on: "#ff0000",
        off: "#3c00ff"
    },

    currentFill: "#3c00ff"
}

let lbSquare = {
    x: 125,
    y: 375,
    size: 250,
    fill: {
        on: "#ff0000",
        off: "#3c00ff"
    },

    currentFill: "#23e2dc"
}

let rbSquare = {
    x: 375,
    y: 375,
    size: 250,
    fill: {
        on: "#ff0000",
        off: "#3c00ff"
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

push();
    fill(rSquare.currentFill);
    noStroke();
    rect(rSquare.x-rSquare.size/2, rSquare.y-rSquare.size/2, rSquare.size, rSquare.size);
pop();

push();
    fill(lbSquare.currentFill);
    noStroke();
    rect(lbSquare.x-lbSquare.size/2, lbSquare.y-lbSquare.size/2, lbSquare.size, lbSquare.size);
pop();

push();
    fill(rbSquare.currentFill);
    noStroke();
    rect(rbSquare.x-rbSquare.size/2, rbSquare.y-rbSquare.size/2, rbSquare.size, rbSquare.size);
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

