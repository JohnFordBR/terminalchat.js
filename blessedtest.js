var blessed = require('blessed');

// Create a screen object.
var screen = blessed.screen();

// Create a box perfectly centered horizontally and vertically.
var outer = blessed.box({
  fg: 'blue',
  bg: 'default',
  border: {
    type: 'line',
    fg: '#ffffff'
  },
  tags: true,
  content: '{center}{red-fg}Hello{/red-fg}{/center}\n'
         + '{right}world!{/right}',
  width: '50%',
  height: '50%',
  top: 'center',
  left: 'center'
});

// Append our box to the screen.
screen.append(outer);

// Create a child box perfectly centered horizontally and vertically.
var inner = blessed.box({
  parent: outer,
  top: 'center',
  left: 'center',
  width: '50%',
  height: '50%',
  border: {
    type: 'line',
    fg: '#ffffff'
  },
  fg: 'white',
  bg: 'magenta',
  content: 'Click {bold}me{/bold}!',
  tags: true,
  hoverEffects: {
    bg: 'green'
  }
});

// If our box is clicked, change the content.
inner.on('click', function(data) {
  inner.setContent('{center}You clicked {red-fg}me{/red-fg}.{/center}');
  screen.render();
});

// If box is focused, handle `enter` and give us some more content.
inner.key('enter', function() {
  inner.setContent('{right}You pressed {black-fg}enter{/black-fg}.{/right}\n');
  inner.setLine(1, 'bar');
  inner.insertLine(1, 'foo');
  screen.render();
});

// Quit on Escape, q, or Control-C.
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Focus our element.
inner.focus();

// Render the screen.
screen.render(); 
