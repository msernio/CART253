/**
 * Class one    
 * Mark Sernio
 * 
 */

"use strict";


function setup() {
    createCanvas(750, 750);

}

function draw() {
    background(109,111,161);
    // call the function - run the code
      push();
    fill(255,214,94);
    stroke(255, 255, 255);
    rect(0, 0, 375, 750);
    pop();

    push();
    fill(255,229,155);
    stroke(255, 255, 255);
    rect(0, 0, 200, 750);
    pop();

    push();
    fill(45,84,158);
    stroke(255, 255, 255);
    rect(550, 0, 375, 750);
    pop();

    drawHill();
    drawTree1();
    drawTree2();
    drawTree3();
    drawTree4();
    drawTree5();
    drawTree6();
    drawMoon();
    drawSun();
}

 // function to draw tree
function drawTree1() {
    push();
    fill(79, 71, 51);
    rect(60, 450, 10, 50);
    fill(46, 75, 54);
    triangle(30, 450, 65, 395, 100, 450);
    triangle(30, 415, 65, 360, 100, 415);
    triangle(30, 380, 65, 325, 100, 380);
    triangle(30, 345, 65, 290, 100, 345);
    pop();

}

function drawTree2() {
    push();
    fill(79, 71, 51);
    rect(160, 480, 10, 50);
    fill(46, 75, 54);
    triangle(130,480,165,425,200,480);
    triangle(130,445,165,390,200,445);
    triangle(130,410,165,355,200,410);
    triangle(130,375,165,320,200,375);
    pop();

}

function drawTree3() {
    push();
    fill(79, 71, 51);
    rect(100, 580, 10, 50);
    fill(46, 75, 54);
    triangle(70, 580, 105, 525, 140, 580);
    triangle(70, 545, 105, 490, 140, 545);
    triangle(70, 510, 105, 455, 140, 510);
    triangle(70, 475, 105, 420, 140, 475);
    pop();
}

function drawTree4() {
    push();
    fill(79, 71, 51);
    rect(450, 540, 10, 50);
    fill(46, 75, 54);
    triangle(420, 540, 455, 485, 490, 540);
    triangle(420, 505, 455, 450, 490, 505);
    triangle(420, 470, 455, 415, 490, 470);
    triangle(420, 435, 455, 380, 490, 435);
    pop();
}

function drawTree5() {
    push();
    fill(79, 71, 51);
    rect(600, 570, 10, 50);
    fill(46, 75, 54);
    triangle(570,570,605,515,640,570);
    triangle(570,535,605,480,640,535);
    triangle(570,500,605,445,640,500);
    triangle(570,465,605,410,640,465);
    pop();
}

function drawTree6() {
    push();
    fill(79, 71, 51);
    rect(540, 670, 10, 50);
    fill(46, 75, 54);
    triangle(510, 670, 545, 615, 580, 670);
    triangle(510, 635, 545, 580, 580, 635);
    triangle(510, 600, 545, 545, 580, 600);
    triangle(510, 565, 545, 510, 580, 565);
    pop();
}

function drawHill() {
    push();
    fill(0, 128, 0);
    ellipse(30, 720, 800, 500);
    ellipse(375, 800, 800, 500);
    pop();
}

function drawMoon() {
    push();
    fill(220, 220, 220);
    stroke(255, 255, 255);
    ellipse(725, 50, 300, 300);
    fill(240, 240, 240);
    stroke(255, 255, 255);
    ellipse(725, 50, 200, 200);
    pop();
}

function drawSun() {
    push();
    fill(255,205,58);
    stroke(255, 255, 255);
    ellipse(25, 50, 300, 300);
    fill(255, 190, 0);
    stroke(255, 255, 255);
    ellipse(25, 50, 200, 200);
    pop();
}

