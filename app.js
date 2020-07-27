//global variables
let movementDisplay;
let ctx
let game;
let snake;
let apple;
let snakeBody = []; //have an array for the snake body


//name arrow keys as variables to make readable
// const up_arrow = 38;
// const down_arrow = 40;
// const right_arrow = 39;
// const left_arrow = 37;

// this creates new characters
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
  this.direction = function() {
        this.x += this.speedX
        this.y += speedY
  }
}


//call a function so you can create the snakeBody as you go 
 let createBody = (snakeBody) => {
    ctx.fillStyle = 'lightred';
    ctx.strokestyle = 'darkred';

    ctx.fillRect(snakeBody.x, snakeBody.y, 20, 20);
    ctx.strokeRect(snakeBody.x, snakeBody.y, 20, 20);
}
//append onto the body as it eats something so that the rest of the body shows up 



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

this.moveDirection = function() {
    this.x += this.speedX;
    this.y += this.speedY;
}


const movementHandler = e => {
  console.log(e)
  // w: 87, a:65, s:83, d:68
  switch (e.keyCode) {
    case (38): // up arrow key
      snake.speedX = 0;
      snake.speedY += 1;
      break;
    case (40): // down arrow key
      snake.speedX = 0;
      snake.speedY += 1;
      break;
    case (37): // left arrow key
        snake.speedX += 1;
        snake.speedY = 0;
      break;
    case (39): // right arrow key
        snake.speedX += 1;
        snake.speedY = 0;
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
  snake = new Crawler(150, 150, 20, 20, 'yellow');
  document.addEventListener('keydown', movementHandler);
  let runGame = setInterval(gameLoop, 60);
})




