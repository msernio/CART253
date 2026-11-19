/**
 * Arrays Prototype 3
 * Mark Sernio
 * 
 * 
 *
 */

"use strict";

let bubbles = [];

let bg = (240, 240, 240);

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    setInterval(addBubble, 300);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
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


function isInsideBubble(bubble) {
    return dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.size/2;
}

// 
function mousePressed() {
    for (let bubble of bubbles) {
        if (isInsideBubble(bubble) && !bubble.popped) {
            bubble.popped = true;
            bg = color(random(255), random(255), random(255));
        }
    }

}