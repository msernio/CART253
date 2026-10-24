/**
 * Events Prototype 2
 * Mark Sernio
 * 
 * This is the Hungry Plant. if you don't feed it, it the plant shrinks and changes colour
 * depending on Hunger Levels. To feed the Hungry Plant, press the 'f' key.
 * 
 *  * Uses:
 * Base Code from Variables Prototype 1 Week
 * p5.js
 * https://p5js.org
 */

"use strict";

/**
 * Variables that outline various properties such as the ball and its x, y, and rgb values, as well as the background colours.
*/

let sun = {
     sunX:375,
     sunY:700,
     sunSize:120,
     r:255,
     g:255,
     b:0
}

// let skys = {
//     fillStates: {
//         night: (4,26,64),
//         day: (173,216,230),
//         sky: (4,26,64),
//     },
// }


let skyNight = {
    fill: {
        r: 4,
        g: 26,
        b: 64
    }
}

let skyDay = {
    fill: {
        r: 173,
        g: 216,
        b: 230
    }
}

let sky = {
    fill: {
        r: 4,
        g: 26,
        b: 64
    }
}


// This setup will just create my canvas for the Prototype

function setup() {
    createCanvas(750, 750);

}


// This draw function will colour the background, create my 'Sun' and alter it depedning on the properties defined in the variables above. It also explores constraining those variables to help in the achieving the colour-change process of the background).

function draw() {
    background(sky.fill.r, sky.fill.g, sky.fill.b);
    
    fill(sun.r, sun.g, sun.b);
    noStroke();
    ellipse(sun.sunX, sun.sunY, sun.sunSize, sun.sunSize);

    
    drawHill();

    sky.fill.r = map(sun.sunY, 700, 90, skyNight.fill.r, skyDay.fill.r);
    sky.fill.g = map(sun.sunY, 700, 90, skyNight.fill.g, skyDay.fill.g);
    sky.fill.b = map(sun.sunY, 700, 90, skyNight.fill.b, skyDay.fill.b);

}


// Function to define the Hill and all of its properties.

function drawHill() {
    push();
    fill(0, 128, 0);
    noStroke();
    ellipse(375, 800, 800, 500);
    pop();
}

function mouseWheel(event) {
    sun.sunY = sun.sunY + event.deltaY;
    sun.sunY = constrain(sun.sunY, 90, 700);

}
