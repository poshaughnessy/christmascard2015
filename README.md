# Christmas Card 2015

Every year, I make a web app as a kind of digital Christmas 'card' for my colleagues.

This year had to be Star Wars themed! Try it out in Chrome, Firefox or Safari on the desktop.
Don't forget to turn your sound up.

It was an opportunity to try out [mo.js](http://mojs.io) and get to grips with [Webpack](https://webpack.github.io/).

To see my previous Christmas cards, take a look at the [container project here](https://github.com/poshaughnessy/Merry-Christmas-From-Peter).

## Development

First:

`npm install`

Then:

`npm run watch`

Load up at: `http://localhost:9000`

## Production

`npm start`

## Improvements

The fade and crawl animations should really be keyframe animations in CSS - that would be easier and they
would perform better than being powered by JavaScript. I ended up using mo.js for all the animations basically
because that's what I started with for the pebble {code} logo animation and it kind of took over as I kept going.

## Credits

Loosely based on the [Star Wars opening crawl](http://codepen.io/TimPietrusky/pen/eHGfj) by
[Tim Pietrusky](http://codepen.io/TimPietrusky).

Starfield background based on [codepen.io/WillemCrnlssn/pen/JgFGs](http://codepen.io/WillemCrnlssn/pen/JgFGs) by [WillemCrnlssn](http://codepen.io/WillemCrnlssn).

Restart icon by [Icons8](https://thenounproject.com/Icons8) - public domain.

Bounce sound based on ["Ping Pong Ball Bouncing" by Maynardkenmuir](https://freesound.org/people/Maynardkenmuir/sounds/328108/),
[CC Attribution Noncommercial](http://creativecommons.org/licenses/by-nc/3.0/).

Star Wars theme music copyright The Walt Disney Company.
