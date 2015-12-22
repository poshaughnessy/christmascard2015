const mojs = require('mo-js');
const Howl = require('howler').Howl;

let windowHeight = window.innerHeight;
let halfWindowHeight = windowHeight / 2;
let letters = document.querySelectorAll('#pebblecode-logo img');
let bounceTweens = new mojs.Timeline();

const kickSound = new Howl({urls: ['sounds/ping-pong-bounce.mp3', 'sounds/ping-pong-bounce.wav'], volume: 0.3})

function createBounceTween(i) {

  let letter = letters[i];
  let letterProgress = i / letters.length;

  return new mojs.Tween({
    delay: 500 + 2000 * (letterProgress * (2-letterProgress)),
    duration: 500,
    onStart: function() {
      setTimeout(function() {
        kickSound.play();
      }, 200);
    },
    onUpdate: function(progress) {
      var bounceProgress = mojs.easing.bounce.out(progress);
      letter.style.transform = 'translateY(' + (halfWindowHeight * bounceProgress - 100) + 'px)';
    }
  });
}


for( let i=0; i < letters.length; i++ ) {
  bounceTweens.add(createBounceTween(i));
}

function start() {
  bounceTweens.start();
}

module.exports = start;
