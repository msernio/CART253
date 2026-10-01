/**
 * Class-four Example
 * Mark Sernio
 * 
 * Exploring ifStatemnts
 */

"use strict";


let creature = {
    x:150,
    y:150,
    w:120,
    h:120,

    eye: {
        fillColour:"#e8e4e4",
        size: 120/3.5,
        center_x:150,
        center_y:150
    },

    fillStates:{
        happy:"#f308f3",
        sad:"#0163ff",
        angry:"#f30808",
        neatural:"#f3eb08",
    },

    currentFill:"#f3eb08"
}



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500,500);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    
    // if(mouseIsPressed === true){
    //     creature.currentFill = creature.fillStates.angry;

    // }

    // else if (keyIsPressed === true){
    //     creature.currentFill = creature.fillStates.happy;
    // }

     // else{
    //     creature.currentFill = creature.fillStates.neatural;
    // }

    background(0);

    let distance = dist(creature.x, creature.y, mouseX, mouseY);
    let mouseIsMoving = (movedX >0 || movedY >0);
    // console.log(distance);

    if(distance < creature.w/2 && mouseIsMoving === true) {
        creature.currentFill = creature.fillStates.angry;
    }

     else{
        creature.currentFill = creature.fillStates.neatural;
    }


    push();
        // body
        fill(creature.currentFill);
        ellipse(creature.x, creature.y, creature.w, creature.h);

        fill(creature.eye.fillColour);
        // left eye
        ellipse(creature.eye.center_x-creature.eye.size, creature.eye.center_y, creature.eye.size, creature.eye.size);
        // right eye
        ellipse(creature.eye.center_x+creature.eye.size, creature.eye.center_y, creature.eye.size, creature.eye.size);
    pop();


}



//  || = or
//  < = less than
//  > = greater than
//  && = and
//  => = 
//  <= =