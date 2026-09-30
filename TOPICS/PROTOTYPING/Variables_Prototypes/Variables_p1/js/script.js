/**
 * Prototype 1 - Variables Prototypes
 * Mark Sernio
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let sun = {
     sunX:375,
     sunY:550,
     sunSize:120,
     r:255,
     g:255,
     b:0
}

let moon = {
     r:0,
     g:0,
     b:50
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



function setup() {
    createCanvas(750, 750);

}

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



function drawHill() {
    push();
    fill(0, 128, 0);
    noStroke();
    ellipse(375, 800, 800, 500);
    pop();
}
