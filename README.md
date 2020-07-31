# The Snake Game!
Project One: Creating the snake game!

## Requirements for the first project:
- Display a game in the browser
- Switch turns between two players, or have the user play the computer (AI or obstacles)
- Design logic for winning & visually display which player won
- Include separate HTML / CSS / JavaScript files
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Use Javascript for DOM manipulation
- Deploy your game online, where the rest of the world can access it
- Use semantic markup for HTML and CSS (adhere to best practices)

## Reasoning behind snake game

When we first had to come up with picking a game, I wanted a game that I was familair with and be able to deliver a final completed project in one week. However, when someone gave me the option to try to build the snake game, I had realized that I have never played this game before and became very intrigued as to why I haven't heard about this game. Without missing a second, I decided to pick this game and even played a few different versions to get a better concept of the game and actually enjoyed playing it more than once. I knew this was going to be a challenge, as the main blocker for me was getting the snake to grow as the apple was beaten eaten. 

## How to play the game!

It's real simple, but there could still be improvements made to the key options. I decided to go with the arrow keys since I felt as if it was more easier to work with. Small bug that I'd address in the future is when you press left arrow key in the beginning of the game, the snake doesn't turn left, but the snake is able to turn right. For my game concept, I decided to end the game whenever your snake crashes with his body. There was another one where I can kill the snake when it collided with the walls, but I found it more excited when he was able to go through the walls. You eventually become a bit more lost or confused the longer he grows that you can still end up colliding with the body, so I decided to go with this version of the game.

## Challenges that came my way.

There were a few things starting right away, I knew would take me a while to get and fully piece together. Despite the challenges that came my way, I am grateful that I was able to accomplish a fully completed game. This was definitely an exciting project and one that allowed me to practice what I had learned so far.

### Using class-components 

For the snake game, I had to come up with two different types of "characters" for my game, the snake and an apple. In order to do this, I created two different class-components because I wanted my snake component to have a speed function and I didn't want that to be part of my apple function. The this.speedX and this.speedY controls the movement of my snake, so once the game starts, the snake is already moving down because I have it set at 10 for speedY.

```javascript
function Crawler(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 10;
  this.width = width;
  this.height = height;
  this.color = color;
  this.alive = true;
//   this.snakeBody = [];
  this.render = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.update = function() {
            this.x += this.speedX;//this is for speed
            this.y += this.speedY;// this is for speed
        if (this.x > game.height) {
            this.x = 0;
        } 
        if (this. y > game.width) {
            this.y = 0;
        } 
        if (this.x < 0) {
            this.x = game.width
        } 
        if (this.y < 0) {
            this.y = game.height
        }    
    }   



//this is for my apple character
function Food (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.total = 1;
    this.width = width;
    this.height = height;
    this.color = color;
    this.alive = true;
    this.render = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

```

### Calling keycodes function

For the movement of my snake, I know that I wanted to have the snake move in one direction once the arrow key was called, but I also did not want my snake to move opposite of the direction it was being called to move (example: if it moves right, cannot move backgrounds (left)). So, I had to use this.newMove and create a if statement to say it should not equal its counter part of that movement along with the speed of that direction.

```javascript
//I don't want the snake moving the opposite direction
//name arrow keys as variables to make it readable
const up_arrow = 38;
const down_arrow = 40;
const right_arrow = 39;
const left_arrow = 37;

this.newMove = function(newDirection) {
    switch(newDirection) {
        case (up_arrow):
           if (this.speedY !== 10) {
            console.log("moving up");
            this.speedX = 0;
            this.speedY = -10;
           }
            break;
        case (down_arrow):
            if (this.speedY !== -10){
                console.log("moving down");
                this.speedX = 0; 
                this.speedY = 10;
            }
            break;

        case (right_arrow):
            if (this.speedX !== -10){
                console.log("moving right");
                this.speedX = 10;
                this.speedY = 0;
            }
            break;

        case(left_arrow):
        if (this.speedX !== 10){
            console.log("moving left");
            this.speedX = -10;
            this.speedY = 0;  
        }
            break;  
        }
    }
  
}


```

### Collision and location

For my apple, I know I needed it to randomly appear on my canvas and in order to do that, I used Math.floor since it will return the largest interger of math.random and then I times it with the game.width and game.height so it won't spawn in the between the walls.

``` javascript

function locateApple() {
    random_x = Math.floor(Math.random() * (game.height - 15)); //need to take the height number
    random_y = Math.floor(Math.random() * (game.width - 15)); // need to take the width number   
}    

const detectHit = () => {
    if (snake.x + snake.width > apple.x &&
        snake.x < apple.x + apple.width &&
        snake.y + snake.height > apple.y &&
        snake.y < apple.y + apple.height ) { 
           score++;
        apple.alive = false;
        let snakeBody = new Crawler(100, 100, 20, 20, '#4B0082');
        snakeArray.push(snakeBody);

        locateApple(apple);
        apple = new Food(random_x, random_y, 15, 15, 'red');
    }
}  

```

  ### Detect Hit
    I referred back to one of the lessons we did during class, where we had the snake recognize if it collided with the apple, to disappear. I added on the locateApple function with the apple characteristics needed for it to respawn. Along with this, I added score++ for the score to increase as you eat the apple and my snakeArray to recognize when it needs to grow.

```javascript
  const detectHit = () => {
    if (snake.x + snake.width > apple.x &&
        snake.x < apple.x + apple.width &&
        snake.y + snake.height > apple.y &&
        snake.y < apple.y + apple.height ) { 
           score++;
        apple.alive = false;
        let snakeBody = new Crawler(100, 100, 20, 20, '#4B0082');
        snakeArray.push(snakeBody);

        locateApple(apple);
        apple = new Food(random_x, random_y, 15, 15, 'red');
    }
} 
```

### Getting my snake to grow!

``` javascript

 for (let i = (snakeArray.length - 1); i > 0; i--){ // i is always going to start at 0
      snakeArray[i].x = snakeArray[i - 1].x; //put its in different place in the array 
      snakeArray[i].y = snakeArray[i - 1].y; // minus    
      snakeArray[i].render();  
    } 

```
### Future Additions

- I do want to create obstacles for the snake, so as it moves along, it also needs to watch out for the obstacles that gets in its way. 
- Perhaps add in where as the snake's body grows, the speed of the snake increases as well. It would add on another challenege as well to the game. 
- Have it in where if the snake collides with the wall, it can also die. 
- Add animations to my snake and apple and add sound to my game. 