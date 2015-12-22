/*
 * Based on http://codepen.io/WillemCrnlssn/pen/JgFGs by WillemCrnlssn.
 */

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let canvas = document.getElementById('stars');

let stars = [];
let numStars = 2000;

canvas.width = windowWidth;
canvas.height = windowHeight;

let context = canvas.getContext('2d');

// Create all the stars
for (let i = 0; i < numStars; i++) {

  let x = Math.round(Math.random() * windowWidth);
  let y = Math.round(Math.random() * windowHeight);
  let length = 1 + Math.random() * 2;
  let opacity = Math.random();

  // Create a new star and draw
  let star = new Star(x, y, length, opacity);

  // Add the the stars array
  stars.push(star);
}

/**
 * Star
 *
 * @param int x
 * @param int y
 * @param int length
 * @param opacity
 */
function Star(x, y, length, opacity) {
  this.x = parseInt(x);
  this.y = parseInt(y);
  this.length = parseInt(length);
  this.opacity = opacity;
  this.factor = 1;
  this.increment = Math.random() * .03;
}

/**
 * Draw a star
 *
 * This function draws a start.
 * You need to give the contaxt as a parameter
 *
 * @param context
 */
Star.prototype.draw = function() {
  context.rotate((Math.PI * 1 / 10));

  // Save the context
  context.save();

  // move into the middle of the canvas, just to make room
  context.translate(this.x, this.y);

  // Change the opacity
  if(this.opacity > 1) {
    this.factor = -1;
  }
  else if(this.opacity <= 0) {
    this.factor = 1;

    this.x = Math.round(Math.random() * windowWidth);
    this.y = Math.round(Math.random() * windowHeight);
  }

  this.opacity += this.increment * this.factor;

  context.beginPath()
  for (let i = 5; i--;) {
    context.lineTo(0, this.length);
    context.translate(0, this.length);
    context.rotate((Math.PI * 2 / 10));
    context.lineTo(0, - this.length);
    context.translate(0, - this.length);
    context.rotate(-(Math.PI * 6 / 10));
  }
  context.lineTo(0, this.length);
  context.closePath();
  context.fillStyle = "rgba(255, 255, 200, " + this.opacity + ")";
  context.shadowBlur = 5;
  context.shadowColor = '#ffffff';
  context.fill();

  context.restore();
}

function start() {
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    star.draw(context);
  }
}

module.exports = start;
