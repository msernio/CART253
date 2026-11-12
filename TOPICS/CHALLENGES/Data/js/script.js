/**
 * Terrible New Car - Challenge
 * Mark Sernio
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";

// Starts with the instruction
let carName = "Click to generate a car name.";

let car = [];
let dinosaur = [];

/**
 * Load the car and dinosaur data
 */
// async function preload() {
   

// }

/**
 * Create the canvas
*/
async function setup() {
    createCanvas(600, 400);

    let carData = await loadJSON("assets/data/cars.json");
    car = carData.cars;

    let dinosaurData = await loadJSON("assets/data/dinosaurs.json");
    dinosaur = dinosaurData.dinosaurs; 
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(carName, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {
    let randomCar = random(car);
    let randomDinosaur = random(dinosaur);

    carName = randomCar + " " + randomDinosaur;
}

