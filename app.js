//name your variables for snake, game, canvas
let snake = {
    x: 500,
    y: 100,
    color: "red",
    width: 40,
    height: 40,
    alive: true,
    render: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}; //my snake 

//reference to your scoreboard in html
let scoreBoard = document.getElementById("score");
//console.log(scoreBoard); //this works


//need to make a reference to the canvas
let game = document.getElementById("game");
//console.log(game); //this works

let ctx = game.getContext('2d'); //ctx will stand for context
game.setAttribute("height", 400);
game.setAttribute("width", 800);

const drawBox = (x, y, size, color) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded!");

 game.addEventListener("click", (e) => {
     snake.x = e.offsetX;
     snake.y = e.offsetY;
    snake.render();
})





})


