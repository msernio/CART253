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
    setInterval(addBubble, 1000);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(200, 200, 200);


}

function createBubble() {
    
    let newBubble = {
        x: random(width),
        y: 0,
        size: random(10,30),
        speed: random(1,3),

    };

    return newBubble;
}

function addBubble() {
    bubbles.push(createBubble());

}