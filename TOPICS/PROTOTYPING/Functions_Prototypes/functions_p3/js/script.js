/**
 * Functions Prototype 3 
 * Mark Sernio
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



let petal1;
let petal2;
let petal3;
let petal4;
let petal5;
let petal6;


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);

    petal1 = createPetal(0);
    petal2 = createPetal(60);
    petal3 = createPetal(120);
    petal4 = createPetal(180);
    petal5 = createPetal(240);
    petal6 = createPetal(300);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('black');

    updatePetal(petal1);
    updatePetal(petal2);
    updatePetal(petal3);
    updatePetal(petal4);
    updatePetal(petal5);
    updatePetal(petal6);

    drawPetal(petal1);
    drawPetal(petal2);
    drawPetal(petal3);
    drawPetal(petal4);
    drawPetal(petal5);
    drawPetal(petal6);

    push();
        fill('yellow');
        stroke('white');
        ellipse(250, 250, 125);
    pop();



}


// Returns a new petal object placed around the centre at the given angle.
function createPetal(angle) {
    let newPetal = {
        x: 250 + cos(angle) * 80,
        y: 250 + sin(angle) * 80,
        size: 90,
        stroke: 'white',
        fill: 'pink',
        falling: false,
        speed: 0
    };
    return newPetal;
}

// Draws whichever petal it is handed.
function drawPetal(petal) {
    push();
        fill(petal.fill);
        stroke(petal.stroke)
        ellipse(petal.x, petal.y, petal.size);
    pop();
}

// This function will return true if the mouse is inside the petal it is handed.
function isInsidePetal(petal) {
    return dist(mouseX, mouseY, petal.x, petal.y) < petal.size/2;
}

// This function will drop the petal clicked, off the flower when the mouse is Pressed.
function mousePressed() {
    if (isInsidePetal(petal1)) {
        petal1.falling = true;
    }

    if (isInsidePetal(petal2)) {
        petal2.falling = true;
    }

     if (isInsidePetal(petal3)) {
        petal3.falling = true;
    }
    
     if (isInsidePetal(petal4)) {
        petal4.falling = true;
    }

     if (isInsidePetal(petal5)) {
        petal5.falling = true;
    }

     if (isInsidePetal(petal6)) {
        petal6.falling = true;
    }

}

// Function so if the petal is 'falling', it and move it down and out of frame to represent that.
function updatePetal(petal) {
    if (petal.falling) {
        petal.y = petal.y + 10;
    }
}

function keyPressed(event) {
    console.log(event.key);

    // red circle
    if(event.key === " ") {
        location.reload();
    }
}