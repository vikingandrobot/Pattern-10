// Init Canvas
let c = document.getElementById("canvas");
let ctx = c.getContext("2d");

// Global variables because I honestly don't have the time
let x, y, size, proba, offset, heart;

/*
  Generates the pattern.
  Fills the background and then calls draw function in loop until the
  pattern is drawn.
*/
function generate(settings) {
  // Draw background color
  ctx.beginPath();
  ctx.fillStyle=settings.bgColor;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.closePath();

  // Initiate the line style
  ctx.beginPath();
  ctx.strokeStyle = settings.lineColor;
  ctx.lineWidth = settings.lineWidth;

  // Incremental variables
  x = y = 0;
  size = settings.patternSize;
  proba = settings.slashProbability / 100;
  offset = settings.lineWidth / 2 / Math.sqrt(2);

  heart = setInterval(draw, 1000/75);
}

/*
  Draw either a slash ot a backslash.
  The values then move on to the next horizontal/vertical location.
*/
function draw() {
    if (Math.random() < proba) {
      slash(ctx, x, y, size)
    } else  {
      backSlash(ctx, x, y, size);
    }
    x += size;
    if (x >= c.width) {
      y += size;
      x = 0;
    }
    if (y >= c.height) {
      clearInterval(heart);
    }
}

/*
  Draw a slash.
*/
function slash(ctx, x, y, size) {
  ctx.moveTo(x - offset, y + offset + size);
  ctx.lineTo(x + offset + size, y - offset);
  ctx.stroke();
}

/*
  Draw a backslash
*/
function backSlash(ctx, x, y, size) {
  ctx.moveTo(x - offset, y - offset);
  ctx.lineTo(x + offset + size, y + offset + size);
  ctx.stroke();
}

/*
  Start generating on page load.
*/
generate(getSettings());

/*
  Register event on generate button click.
*/
let generateButton = document.querySelector('#submit-settings');
generateButton.addEventListener('click', function() {
  clearInterval(heart);
  generate(getSettings());
}, false);
