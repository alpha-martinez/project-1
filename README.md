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

For the snake game, I had to come up with two different types of "characters" for my game, the snake and an apple. In order to do this, I created two different class-components because I wanted my snake component to have a speed function and I didn't want that to be part of my apple function. 

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
```
