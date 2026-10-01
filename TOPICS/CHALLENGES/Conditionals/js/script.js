/**
 * Circle Master
 * Mark Sernio
 *
 * This will be a program in which the user can push a circle
 * on the canvas using their own circle.
 */


"use strict";

const puck = {
  x: 200,
  y: 200,
  size: 100,
  fill: "#ff0000"
};

const user = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 75,
  fill: "#000000"
};

const target = {
    x: 50,
    y: 300,
    size: 40,

    fillStates:{
        on:"#04f839",
        off:"#f50101",
    }, 
    
    currentFill:"#f50101"
};


/**
 * Create the canvas
 */
function setup() {
  createCanvas(400, 400);
}


/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
  background("#aaaaaa");
  
  // Move user circle
  movePuck();
  moveUser();
  checkTarget();
  
  // Draw the user and puck
  drawUser();
  drawPuck();
  drawTarget();

}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
  user.x = mouseX;
  user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
  push();
  noStroke();
  fill(user.fill);
  ellipse(user.x, user.y, user.size);
  pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
  push();
  noStroke();
  fill(puck.fill);
  ellipse(puck.x, puck.y, puck.size);
  pop();
}


function movePuck() {
  let distance = dist(user.x, user.y, puck.x, puck.y);
  let overlap = (distance < user.size/2 + puck.size/2);

  if (overlap === true) {
    puck.x = puck.x + (puck.x - user.x)/10;
  }

  if (overlap === true) {
    puck.y = puck.y + (puck.y - user.y)/10;
  }

}

function drawTarget() {
    push();
    fill(target.currentFill);
    ellipse(target.x, target.y, target.size);
    pop()
}

function checkTarget() {
    let distance = dist(puck.x, puck.y, target.x, target.y);
    let overlap = (distance < puck.size/2 + target.size/2);

     if (overlap === true) {
        target.currentFill = target.fillStates.on;
     }

    else{
        target.currentFill = target.fillStates.off;
    }
}

