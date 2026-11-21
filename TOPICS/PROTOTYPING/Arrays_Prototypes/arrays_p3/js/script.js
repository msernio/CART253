/**
 * Arrays Prototype 3
 * Mark Sernio
 * 
 * Bubble Rain. A new bubble is created every 0.3 seconds and rises from
 * the bottom of the canvas. Click a bubble to pop it, which also changes
 * the background to a random colour.
 *
 * Uses:
 * p5.js
 * https://p5js.org
 */

"use strict";


// The array for all the bubbles
let bubbles = [];

//  The defualt background colour before it changes
let bg = (240, 240, 240);

/**
 * Creates the Canvas and then also starts a timer controls how fast a new bubble gets added.
*/
function setup() {
    createCanvas(500, 500);
    setInterval(addBubble, 300);

}


/**
 * Draws the backgroun, then loops through the bubble array. Checking that if the bubble isnt popped, it continues to move and redraw.
*/
function draw() {
    background(bg);

    for (let bubble of bubbles){
        if(!bubble.popped) {
            updateBubble(bubble);
            drawBubble(bubble);
        }
    }
}

// function that builds and returns a new bubble object at a random spot along the bottom. Popped is flag, that the mousePressed function will flip.
function createBubble() {
    
    let newBubble = {
        x: random(50, 450),
        y: 500,
        size: random(10,80),
        speed: random(1,3),
        fill:'lightblue',
        stroke:'white',

        popped: false,
    };

    return newBubble;
}

// Called by the timer. It creates a bubble and adds it the end of array.
function addBubble() {
    bubbles.push(createBubble());

}

// Draws whichever bubble it is handed.
function drawBubble(bubble) {
    push();
        fill(bubble.fill);
        stroke(bubble.stroke);
        ellipse(bubble.x, bubble.y, bubble.size);
    pop();
}

// Moved whichever bubble it is handed upward along the y-axis.
function updateBubble(bubble) {
    bubble.y = bubble.y - 5;

}

// Function to help identify whether the mouse is within the bubble it is handed or not.
function isInsideBubble(bubble) {
    return dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.size/2;
}

// When clicked, it loops through each bubble and if the mouse is on one that isnt popped yet,
// it pops it and sets a new random background colour.
function mousePressed() {
    for (let bubble of bubbles) {
        if (isInsideBubble(bubble) && !bubble.popped) {
            bubble.popped = true;
            bg = color(random(255), random(255), random(255));
        }
    }

}