let movementDisplay;
let ctx
let game;
let hero;
let ogre;

// Crawler Constructor function
function Crawler(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;
  this.alive = true;
  this.render = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const detectHit = () => {
    //check for collision on x-axis
    //if the heroes bottom value is greater than > ogre's top value 
    if (snake.x + snake.width > apple.x &&
        snake.x < apple.x + apple.width &&
        snake.y + snake.height > apple.y &&
        snake.y < apple.y + apple.height 
    ) { apple.alive = false;
    }
}
const gameLoop = () => {
  // clear the cavas
  ctx.clearRect(0, 0, game.width, game.height);
  // display the x, y coordinates of snake onto the DOM
  movementDisplay.textContent = `X:${snake.x}\nY:${snake.y}`;
 
  if (apple.alive) {
    apple.render()
    detectHit();
  }
  // render the snake
  snake.render()
}
const movementHandler = e => {
  console.log(e)
  // w: 87, a:65, s:83, d:68
  switch (e.keyCode) {
    case (38): // up arrow key
      if (snake.y > 0) snake.y -=5
      break;
    case (40): // down arrow key
      if (snake.y + snake.height < game.height) snake.y +=5
      break;
    case (37): // left arrow key
      if (snake.x > 0) snake.x -=5
      break;
    case (39): // right arrow key
      if (snake.x + snake.width < game.width) snake.x +=5
      break;
    default:
      console.log('invalid');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Dom loaded')
  // DOM REFS
  movementDisplay = document.getElementById('movement');
  game = document.getElementById('game');
  // CANVAS CONFIG
  game.setAttribute('height', 400);
  game.setAttribute('width', 800);
  ctx = game.getContext('2d');
  // CHARACTER REFS
  apple = new Crawler(300, 100, 15, 15, 'red');
  snake = new Crawler(200, 100, 20, 20, 'yellow');
  document.addEventListener('keydown', movementHandler);
  let runGame = setInterval(gameLoop, 60);
})


//have an array within the snake, snake body array that when the snake eats something
    

//append onto the body as it eats something so that the rest of the body shows up 

