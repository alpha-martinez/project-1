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
function Crawler(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.width = width;
  this.height = height;
  this.color = color;
  this.alive = true;
  this.render = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  //attempting to add velocity 
  this.update = function() {
        this.x += this.speedX;
        this.y += this.speedY; 
 }
}


//this is for my apple character
function Food (x, y, width, height, color) {
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
//The Math.floor() function returns the largest integer less than or equal to a given number.
//math.random() function returns a random number
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

//I don't want the snake moving the opposite direction

this.newMove = function(newDirection) {
    switch(newDirection) {
        case (up_arrow):
            this.speedX = 0;
            this.speedY = -10;
            break;

        case (down_arrow):
            this.speedX = 0; 
            this.SpeedY = 10;
            
        case (right_arrow):
            this.speedX = 10;
            this.speedY = 0;

        case(right_arrow):
            this.speedX = -10;
            this.speedY = 0;    

    }
    
}



document.addEventListener('DOMContentLoaded', () => {
  console.log('Dom loaded')
  // DOM REFS
  movementDisplay = document.getElementById('movement');
  game = document.getElementById('game');
  // CANVAS CONFIG
  game.setAttribute('height', '630px');
  game.setAttribute('width', '800px');
  ctx = game.getContext('2d');
  // CHARACTER REFS
  apple = new Food(300, 100, 15, 15, 'red');
  snake = new Crawler(150, 150, 20, 20, 'yellow');

  document.addEventListener('keydown', ((e) => {
      let newDirection = e.keyCode;
      snake.newMove(newDirection);
    }))

  window.setInterval(() => {
    //The setInterval() method calls a function or evaluates an expression at 
    //specified intervals (in milliseconds).
    //The setInterval() method will continue calling the function until 
    //clearInterval() is called, or the window is closed.
    //Tip: 1000 ms = 1 second.
      ctx.clearRect(0,0, game.width, game.height);
      snake.update();
      snake.render();
  }, 400);
  
});




