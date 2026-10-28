/**
 * Events Prototype 2
 * Mark Sernio
 * 
 * This is a sunrise/sunset controlled by your mouse scroll / trackpad. Scrolling will move the sun/down and change the colour of the sky appropriately.
 * 
 *  * Uses:
 * Base Code from Variables Week, Prototype 1
 * p5.js
 * https://p5js.org
 */

"use strict";

/**
 * Variables that outline various properties such as the sun and its x, y, and rgb values, as well as the background colours.
*/

// Variable that defines the sun object and its properties.
let sun = {
     sunX:375,
     sunY:700,
     sunSize:120,
     r:255,
     g:255,
     b:0
}

// Variable that defines the 'skyNight' colours.
let skyNight = {
    fill: {
        r: 4,
        g: 26,
        b: 64
    }
}

// Variable that defines the 'skyDay' colours.
let skyDay = {
    fill: {
        r: 173,
        g: 216,
        b: 230
    }
}


// Variable that defines the 'sky' colours.
let sky = {
    fill: {
        r: 4,
        g: 26,
        b: 64
    }
}




// Function to define the Hill and all of its properties.

function drawHill() {
    push();
    fill(0, 128, 0);
    noStroke();
    ellipse(375, 800, 800, 500);
    pop();
}

// Event function that controlls how the sun moves through the mouseWheel function, as well as a constraint on its movement, relative to the X and Y axis.
function mouseWheel(event) {
    sun.sunY = sun.sunY + event.deltaY;
    sun.sunY = constrain(sun.sunY, 90, 700);

}





// This setup will just create my canvas for the Prototype

function setup() {
    createCanvas(750, 750);

}


// This draw function will colour the background, create my 'Sun' and alter sky colour depending on the where the mouse is scrolled (controlled by the map function)

function draw() {
    background(sky.fill.r, sky.fill.g, sky.fill.b);
    
    // Draws the sun
    fill(sun.r, sun.g, sun.b);
    noStroke();
    ellipse(sun.sunX, sun.sunY, sun.sunSize, sun.sunSize);

    // Draws the hill
    drawHill();

    // Maps the Sun's height to the sky colour (ie. low sun = night, high sun = day)
    sky.fill.r = map(sun.sunY, 700, 90, skyNight.fill.r, skyDay.fill.r);
    sky.fill.g = map(sun.sunY, 700, 90, skyNight.fill.g, skyDay.fill.g);
    sky.fill.b = map(sun.sunY, 700, 90, skyNight.fill.b, skyDay.fill.b);

}



