/**
 * Events Prototype 1
 * Mark Sernio
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let plant = {
    x: 250,
    y: 250,
    size: 150,
    sizeMin: 20,
    sizeMax: 300,

    fillStates: {
        happy: "#3ddc84",
        hungry: "#f3eb08",
        starving: "#f30808"
    },

    currentFill: "#3ddc84"

}

    

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500,500);
    background(255, 255, 0);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255, 255, 0);

     push()
        fill(plant.currentFill);
        noStroke();
        ellipse(plant.x, plant.y, plant.size);
    pop()

}