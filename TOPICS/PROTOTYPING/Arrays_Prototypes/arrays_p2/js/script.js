/**
 * Arrays Prototype 2
 * Mark Sernio
 * 
 * A Fortune Orb (Magic 8 ball style). Ask yourself a question, click the orb and it shakes from side
 * to side, then shows a random answer.
 *
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 */

"use strict";

// The array of possible answers. Position 0 is blank so the orb starts empty.
let fortunes = ["", "YES","CERTAINLY", "NO", "MAYBE", "DONT COUNT ON IT", "UNLIKELY", "POSSIBLY"];

let fortuneIndex = 0;
let shaking = false;


/**
 * Creates the Canvas
*/
function setup() {
    createCanvas(500, 500)

}


/**
 * Draws the orb and the current fortune each frame. While shaking,
 * both are moved a random amount left or right (shakeX).
 */

function draw() {
    background('black');
   
    // Outlines how far the orb shakes when mouse pressed it run, and will remain at 0 unless it is shaking.
    let shakeX = 0;
    if (shaking) {
        shakeX = random(-6,6)
    }

    // Draws the Orb.
    push()
        fill('white');
        noStroke();
        ellipse(height/2  + shakeX, width/2, 250);
    pop()

    // Draws the text within the Orb in accordance with the defined array.
    push()
        fill(0);
        textSize(22);
        textAlign(CENTER, CENTER);
        text(fortunes[fortuneIndex], width/2 + shakeX, height/2);
    pop()

}

/** 
 * Function that controls what is selected from the Array, and also triggers the shake of the text and orb.
 * random(1, fortunes.length) starts at 1 so the blank at position 0 is never picked again after the first click.
*/

function mousePressed() {
    fortuneIndex = floor(random(1, fortunes.length));

    shaking = true;
    setTimeout(stopShake, 250);
}

// Function to stop the Orb from shaking which is called by the time from mousePressed function.
function stopShake() {
    shaking = false;

}