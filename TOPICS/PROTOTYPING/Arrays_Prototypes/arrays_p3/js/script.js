/**
 * Arrays Prototype 3
 * Mark Sernio
 * 
 * 
 *
 */

"use strict";

let bubbles = [];

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    setInterval(addBubble, 500);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(240, 240, 240);

    for (let bubble of bubbles){
        updateBubble(bubble);
        drawBubble(bubble);
    }

}

function createBubble() {
    
    let newBubble = {
        x: random(200, 300),
        y: 500,
        size: random(10,50),
        speed: random(1,3),
        fill:'lightblue',
        stroke:'white',
    };

    return newBubble;
}

function addBubble() {
    bubbles.push(createBubble());

}

function drawBubble(bubble) {
    push();
        fill(bubble.fill);
        stroke(bubble.stroke);
        ellipse(bubble.x, bubble.y, bubble.size);
    pop();
}


function updateBubble(bubble) {
    
    bubble.y = bubble.y - 5;

}