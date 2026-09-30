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
        r: 109,
        g: 111,
        b: 161
    }
}

let skyDay = {
    fill: {
        r: 173,
        g: 216,
        b: 230
    }
}



function setup() {
    createCanvas(750, 750);

}

function draw() {
    background(skyDay.fill.r, skyDay.fill.g, skyDay.fill.b);
    
    fill(sun.r, sun.g, sun.b);
    noStroke();
    ellipse(sun.sunX, sun.sunY, sun.sunSize, sun.sunSize);
    sun.sunY = sun.sunY - 1;
    sun.sunY = constrain(sun.sunY,750);
    drawHill();


}




function drawHill() {
    push();
    fill(0, 128, 0);
    noStroke();
    ellipse(375, 800, 800, 500);
    pop();
}
