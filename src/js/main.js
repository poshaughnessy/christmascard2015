let logoTimeline = require('./pebblecode-logo');
let starWarsTimeline = require('./starwars');
let starfield = require('./starfield');

let mainTimeline = new mojs.Timeline();

console.log('Running...');

starfield();

//mainTimeline.add(logoTimeline);   // TODO put back
mainTimeline.add(starWarsTimeline); // TODO change back to append

mainTimeline.start();
