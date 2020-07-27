//global variables
let movementDisplay;
let ctx
let game;
let snake;
let apple; //food
let snakeBody = []; //have an array for the snake body


//name arrow keys as variables to make it readable
const up_arrow = 38;
const down_arrow = 40;
const right_arrow = 39;
const left_arrow = 37;

// this is for my snake character
function Snake(x, y, width, height, color) {
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


//this is for my apple character
function Apple(x, y, width, height, color) {
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
//function for apple falling randomly
function locateApple() {

    let random_x = Math.floor(Math.random() * 5);
    
    let random_y = Math.floor(Math.random() * 5);
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

//attempting to add velocity 
this.update = function() {
    this.x += this.speedX;
    this.y += this.speedY;
}

const movementHandler = e => {
    let key = e.keyCode
    // w: 87, a:65, s:83, d:68
    switch (key) {
      case (up_arrow): // w up
        if (snake.y > 0) snake.y -=5 //if your snake 
        break;

      case (down_arrow): // s down
        if (snake.y + snake.height < game.height) snake.y +=5
        break;

      case (left_arrow): // a left
        if (snake.x > 0) snake.x -=5
        break;

      case (right_arrow): // d right
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
  game.setAttribute('height', '400px');
  game.setAttribute('width', '700px');
  ctx = game.getContext('2d');
  // CHARACTER REFS
  apple = new Apple(300, 100, 15, 15, 'red');
  snake = new Snake(150, 150, 20, 20, 'yellow');

  document.addEventListener('keydown', movementHandler);
  let runGame = setInterval(gameLoop, 60);
})




