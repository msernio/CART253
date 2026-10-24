/**
 * Events Prototype 1
 * Mark Sernio
 * 
 * This is the Hungry Plant. if you don't feed it, it the plant shrinks and changes colour
 * depending on Hunger Levels. To feed the Hungry Plant, press the 'f' key.
 * 
 * * Uses:
 * p5.js
 * https://p5js.org
 */


"use strict";

// The variable for the plant visual and all of its properties
let plant = {
    x: 250,
    y: 250,
    size: 200,
    sizeMin: 50,
    sizeMax: 400,

// the colour states the define each hunger state of the 'plant'
    fillStates: {
        happy: "#3ddc84",
        hungry: "#f3eb08",
        starving: "#f30808",
        full: "#ffae00"
    },

    currentFill: "#3ddc84"

}

// A function that defines the Hunger Levels of the Plant through colour
function moodChange() {
    // if the plant size eqauls the sizeMin variable, then it will change colour
    if(plant.size === plant.sizeMin)
        plant.currentFill = plant.fillStates.starving;

    // if the plant size eqauls the sizeMax variable, then it will change colour
    else if(plant.size === plant.sizeMax)
        plant.currentFill = plant.fillStates.full;

    // if the plant size is less than the 200, then it will change colour
    else if(plant.size < 200)
        plant.currentFill = plant.fillStates.hungry;

    // if the plant size is greater than the 200, then it will change colour
    else if(plant.size > 200)
        plant.currentFill = plant.fillStates.happy;
    
}

// A function that causes the Plant to shrink automatically and constrain it not shrink less than sizeMin.
function shrinkPlant() {
    plant.size = plant.size - 30;

    plant.size = constrain(plant.size, plant.sizeMin, plant.sizeMax);

}

// An event that causes the plant to grown when a key is pressed, and constrain to not grow more than sizeMax
function keyPressed(event) {
    console.log(event.key)

    if (event.key === "f"){
        plant.size = plant.size + 20;
    }

    plant.size = constrain(plant.size, plant.sizeMin, plant.sizeMax);
}
/**
 * Creates the Canvas, sets the background colour and calls the event and dictates how it runs
*/
function setup() {
    createCanvas(500,500);
    background(0);

    setInterval(shrinkPlant, 1500);

}


/**
 * Calls the moodChange function and creates the Plant (ellipse) alligned with the previously defined variables.
*/
function draw() {
    background(0);
    moodChange();

     push()
        fill(plant.currentFill);
        noStroke();
        ellipse(plant.x, plant.y, plant.size);
    pop()

}