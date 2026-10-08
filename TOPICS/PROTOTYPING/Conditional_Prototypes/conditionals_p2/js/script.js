/**
 * Conditional Prototypes 2
 * Mark Sernio
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let width = 500;
let height = 500;

let magnet = {
    x: width/4,
    y: height/4,
    size: 90,
    fill:"#acacac",

}



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(width, height);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(100, 100, 255);

    let distance = dist(magnet.x, magnet.y, mouseX, mouseY);

    fill(magnet.fill);
    noStroke();
    ellipse(magnet.x, magnet.y, magnet.size, magnet.size);
    ellipse(magnet.x + width/2, magnet.y, magnet.size, magnet.size);




}


