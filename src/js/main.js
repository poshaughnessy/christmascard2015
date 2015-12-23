let logoTimeline = require('./pebblecode-logo');
let starWarsTimeline = require('./starwars');
let starfield = require('./starfield');

let messagePageEl = document.getElementById('message-page');
let restartEl = document.getElementById('restart');

let mainTimeline = new mojs.Timeline({
  onComplete: function() {
    messagePageEl.style.display = 'block';
  }
});

starfield();

mainTimeline.add(logoTimeline);
mainTimeline.append(starWarsTimeline);

mainTimeline.start();

restartEl.onclick = function() {
  messagePageEl.style.display = 'none';
  mainTimeline.restart();
};
