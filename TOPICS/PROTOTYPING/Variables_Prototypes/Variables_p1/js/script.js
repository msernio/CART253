/**
 * Prototype 1 - Variables Prototypes
 * Mark Sernio
 * 
 * A prototype designed to build on functions we learnt in Week 3 Class surrounding variables. In particular, this one focuses on defining and calling variables, and how they can be changed in certain functions over time.
 * 
 * Uses:
 * p5.js
 * https://p5js.org
 */

"use strict";

/**
 * Variables that outline various properties such as the ball and its x, y, and rgb values, as well as the background colours.
*/

let sun = {
     sunX:375,
     sunY:550,
     sunSize:120,
     r:255,
     g:255,
     b:0
}

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
    sun.sunY = sun.sunY - 2;
    sun.sunY = constrain(sun.sunY,90,550);

    push();
    sky.fill.r = sky.fill.r + 0.8;
    sky.fill.r = constrain(sky.fill.r, skyNight.fill.r, skyDay.fill.r);
    sky.fill.g = sky.fill.g + 0.8;
    sky.fill.g = constrain(sky.fill.g, skyNight.fill.g, skyDay.fill.g);
    sky.fill.b = sky.fill.b + 0.8;
    sky.fill.b = constrain(sky.fill.b, skyNight.fill.b, skyDay.fill.b);
    pop();

    drawHill();

}


// Function to define the Hill and all of its properties.

function drawHill() {
    push();
    fill(0, 128, 0);
    noStroke();
    ellipse(375, 800, 800, 500);
    pop();
}
