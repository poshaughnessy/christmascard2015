const mojs = require('mo-js');

let windowHeight = window.innerHeight;
let halfWindowHeight = windowHeight / 2;

let crawl = document.querySelector('#crawl');
let timeline = new mojs.Timeline();

let tween = new mojs.Tween({
  delay: 500,
  duration: 10000,
  onStart: function() {
    setTimeout(function() {
      //starWarsTheme.play();
    }, 200);
  },
  onUpdate: function(progress) {
    var bounceProgress = mojs.easing.bounce.out(progress);
    crawl.style.transform = 'translateY(' + (halfWindowHeight * bounceProgress - 100) + 'px)';
  }
});

//timeline.add( tween );

module.exports = timeline;
