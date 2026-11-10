/**
 * Arrays Prototype 1
 * Mark Sernio
 * 
 * Three flowers, each with six petals. Click a petal and it falls off the
 * canvas. Press the space bar to reset the flowers.
 *
 * All 18 petals are stored in a single array (petals). .push() adds each
 * petal as the flowers are built, amongst other things like for. loops and functions.
 * 
 * Uses:
 * Based off my Functions P3
 * p5.js
 * https://p5js.org
 */

"use strict";


let petals = [];



/**
 * Creates the canvas and builds the six petals.
*/
function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);

    createFlower(150, 350, 'pink');
    createFlower(350, 350, 'orange');
    createFlower(250, 150, 'violet');

}


// _____________________


/**
 * Draws the flowers as a whole (center and petals)
*/
function draw() {
    background('skyblue');

    for (let petal of petals){
        updatePetal(petal);
        drawPetal(petal);
    }

    //  This works like - for each thing in balls, call it ball for a moment, and run these three lines on it.

    drawCentre(150, 350);
    drawCentre(350, 350);
    drawCentre(250, 150);

}

// _____________________

    // Draws flower centres
    function drawCentre(x, y) {
    push();
        fill('yellow');
        stroke('white');
        ellipse(x, y, 125);
    pop();
    }



    // Returns a new petal object placed around the centre at the given angle.
    function createPetal(angle, cx, cy, colour) {
        let newPetal = {
            x: cx + cos(angle) * 80,
            y: cy + sin(angle) * 80,
            size: 90,
            stroke: 'white',
            fill: colour,
            falling: false,
            speed: 0
        };
        return newPetal;
    }

    // Draws whichever petal it is handed.
    function drawPetal(petal) {
        push();
            fill(petal.fill);
            stroke(petal.stroke)
            ellipse(petal.x, petal.y, petal.size);
        pop();
    }

    // This function will return true if the mouse is inside the petal it is handed.
    function isInsidePetal(petal) {
        return dist(mouseX, mouseY, petal.x, petal.y) < petal.size/2;
    }

    // This function will drop the petal clicked, off the flower when the mouse is Pressed.
    function mousePressed() {

        for (let petal of petals) {
            if (isInsidePetal(petal)) {
                petal.falling = true;
            }
        }
        

    }

    // Function so if the petal is 'falling', it and move it down and out of frame to represent that.
    function updatePetal(petal) {
        if (petal.falling) {
            petal.y = petal.y + 10;
        }
    }

    // Function that outlined when the space bar is pressed, it reloads the page to reset the flower.
    function keyPressed(event) {
        console.log(event.key);

        // red circle
        if(event.key === " ") {
            location.reload();
        }
    }

    // Function that adds the six petals of one flower to the petals array using .push().
    // Each petal is made by createPetal(), which returns a petal object.
    function createFlower(cx, cy, colour) {
        petals.push(createPetal(0, cx, cy, colour));
        petals.push(createPetal(60, cx, cy, colour));
        petals.push(createPetal(120, cx, cy, colour));
        petals.push(createPetal(180, cx, cy, colour));
        petals.push(createPetal(240, cx, cy, colour));
        petals.push(createPetal(300, cx, cy, colour));
        
    }