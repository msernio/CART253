/**
 * class-five Ex1
 * Mark Sernio
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

let mouseTriggerBall ={
    x: 200,
    y: 200,
    size: 50,
    speed: 0,
    fillColour:{
        r: 0,
        g: 0,
        b: 255
    }
}

function setup() {
    createCanvas(500,500);
    background(0);
    // function to create a delay in executing a function
        // setTimeout(changeBallColour, 5000);

    setInterval(changeBallColour, 2000);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    fill(mouseTriggerBall.fillColour.r, mouseTriggerBall.fillColour.g, mouseTriggerBall.fillColour.b);
    ellipse(mouseTriggerBall.x, mouseTriggerBall.y, mouseTriggerBall.size, mouseTriggerBall.size);

    moveBall();


}




function moveBall(){
    mouseTriggerBall.x = mouseTriggerBall.x + mouseTriggerBall.speed;
    mouseTriggerBall.x = constrain(mouseTriggerBall.x, 0, width);
}

function changeBallColour(){
    mouseTriggerBall.fillColour.r = random(255);
    mouseTriggerBall.fillColour.g = random(255);
    mouseTriggerBall.fillColour.b = random(255);
}


// function keyPressed(event){
//     console.log(event.key);

//     if (event.key === "r"){
//          mouseTriggerBall.speed = 2;

//     }
// }

// function keyReleased(){
//     mouseTriggerBall.speed = 0;
// }


// function mousePressed(){
//     mouseTriggerBall.speed = 1;
// }

// function mouseReleased(){
//     mouseTriggerBall.speed = 0;

// }

// function mouseWheel(event){
//     console.log(event.deltaY);
//     // mouseTriggerBall.size = constrain(mouseTriggerBall.size, 5, 200);
//     mouseTriggerBall.size = mouseTriggerBall.size - event.deltaY;

// }

// function mouseDragged(){
//     mouseTriggerBall.x = mouseX;
// }

// function mouseMoved(){
//     mouseTriggerBall.x = mouseX;
  
// }

// function mousePressed(){
//     fill(random(0, 225), random(0, 225), random(0, 225));
//     ellipse(mouseX, mouseY, mouseTriggerBall.size);
// }
