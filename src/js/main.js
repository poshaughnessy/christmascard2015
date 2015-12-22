let logoTimeline = require('./pebblecode-logo');
let starfield = require('./starfield');

let mainTimeline = new mojs.Timeline();

console.log('Running...');

starfield();

mainTimeline.add(logoTimeline);

mainTimeline.start();

