/**
 * Events Prototype 3
 * Mark Sernio
 * 
 * This is a protoype that allows you paint your own canvas. Press any key and it will paint a dot. Some keys are 
 * specific to colour (eg. r = red) so the user has some control in what they want to create, but all others are random colours.
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 */

"use strict";

// Variable to define dot and its properties.
let dot = {
    size: 40,
    sizeMax: 80
}

/**
 * Creates the Canvas and sets the background colour of it.
*/
function setup() {
    createCanvas(500,500);
    background(0);

}


/**
 * I didnt need it in this Prototype.
*/
function draw() {

}

// function Event that will paint the canvas with dots when you press on a key. Some keys will produce specific colours of circle and then rest are just random.
function keyPressed(event) {
    console.log(event.key);

    // red circle
    if(event.key === "r") {
        fill(255, 0, 0);
    }

    // green circle
    else if(event.key === "g") {
        fill(0, 255, 0);
    }

    // yellow blue
    else if(event.key === "b") {
        fill(0, 0, 255);
    }

    // yellow circle
    else if(event.key === "y") {
        fill(255, 255, 0);
    }

    // magenta circle
    else if(event.key === "m") {
        fill(255, 0, 255);
    }

    // purple circle
    else if(event.key === "p") {
        fill(128, 0, 128);
    }

    // magenta circle
    else if(event.key === "m") {
        fill(0, 255, 0);
    }

    // Teal circle
    else if(event.key === "t") {
        fill(0, 128, 128);
    }

    // other colours are random
    else {
        fill(random(255),random(255), random(255));
    }


    // draws the splate)
    noStroke();
    ellipse(random(500), random(500), random(10, dot.sizeMax));

}


// clear function that will wipe the canvas clean
function mousePressed() {
    background(0);

}
