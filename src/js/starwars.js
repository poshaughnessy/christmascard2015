const mojs = require('mo-js');
const Howl = require('howler').Howl;

let intro = document.querySelector('#starwars-intro');
let logo = document.querySelector('#starwars-logo');
let crawl = document.querySelector('#starwars-crawl');

const starWarsTheme = new Howl({urls:
  [
    'sounds/Star_Wars_original_opening_crawl_1977.ogg',
    'sounds/Star_Wars_original_opening_crawl_1977.mp3'
  ],
  buffer: true,
  volume: 1.0});

let timeline = new mojs.Timeline({
  onComplete: function() {
    console.log('Star Wars logo animation complete');
  }
});

let introShowTween = new mojs.Tween({
  delay: 0,
  duration: 1000,
  onUpdate: function(progress) {
    var fadeInProgress = mojs.easing.ease.in(progress);
    intro.style.opacity = fadeInProgress;
  }
});

let introFadeTween = new mojs.Tween({
  delay: 5000,
  duration: 1000,
  onUpdate: function(progress) {
    var fadeOutProgress = mojs.easing.ease.out(progress);
    intro.style.opacity = 1-fadeOutProgress;
  }
});

let logoTween = new mojs.Tween({
  delay: 0,
  duration: 9000,
  onStart: function() {
    starWarsTheme.play();
    logo.style.opacity = 1;
  },
  onUpdate: function(progress) {
    logo.style.transform = `scale(${1.8 - (progress * 1.7)})`;
    if (progress > 0.5) {
      logo.style.opacity = 1 - ((progress - 0.5) * 2);
    }
  }
});

let crawlTween = new mojs.Tween({
  delay: 11500,
  duration: 80000,
  onUpdate: function(progress) {
    crawl.style.transform = `perspective(300px) rotateX(25deg) translateY(${1400 - (progress * 2500)}px)`;
    if (progress > 0.9) {
      crawl.style.opacity = 1 - ((progress - 0.9) * 10);
    }
  }
});

timeline.add( introShowTween );
timeline.append( introFadeTween );
timeline.append( logoTween );
timeline.add( crawlTween );

module.exports = timeline;
