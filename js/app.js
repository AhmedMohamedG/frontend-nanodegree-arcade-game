
// Enemies our player must avoid
var Enemy = function(x,y) {

    
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x=x;
    this.y=y;
    this.sprite = 'images/enemy-bug-croped-fliped.png';
    this.render = function(){
    return ctx.drawImage(Resources.get(this.sprite),this.x,this.y);

    }
    this.flag= true
    this.update = function(dt){
        /*switch(this.x){
            case 520:
            this.flag = false;
            break;
            case -20:
            this.flag=true;
            default:
            this.flag = true;
        }*/
        if(this.x <= 520 && this.flag === true){
            Enemy(this.x++, this.y);
            this.sprite = 'images/enemy-bug-croped.png';
            if(this.x===520){
                this.flag = false;
            }
        }else if(this.x >=0 && this.flag === false){
            Enemy(this.x--, this.y);
            this.sprite = 'images/enemy-bug-croped-fliped.png';
            if(this.x === 0){
                this.flag=true;
            }
            }
    }

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class character{
    constructor(){
       this.x = 200;
       this.y = 400;
       let body = Resources.get('images/enemy-bug.png');
    }
    update(){
    
    }
    render(){
       ctx.drawImage(Resources.get('images/char-boy-croped.png'), this.x , this.y);
    //  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

character.prototype.handleInput = function(controler){
    if(controler){
            switch(controler){
                        case 'ArrowRight':
                       this.x += 5;
                        break;
                        case 'ArrowLeft':
                        this.x -= 5;
                        break;
                        case 'ArrowUp':
                        this.y -= 5;
                        break;
                        case 'ArrowDown':
                        this.y += 5;
                    }
       } 

}

var player = new character; 


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
/*document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});*/

/*class characters{
    constructor(){
        this.body = ['char-boy.png','char-cat-girl.png','char-horn-girl.png','char-pink-girl.png',
        'char-princess-girl.png','enemy-bug.png'];
        this.width= canvas.width/20;
        this.hieght = canvas.hieght/20; 
    }

}*/






var bug1 = new Enemy(0,220);
var bug2 = new Enemy(0,305);
var bug3 = new Enemy(0,140);





document.addEventListener('keypress', (event) => {
  let controler = false;

   if(player.x > 420){
    player.x--;
   }else if(player.x < 20){
    player.x++;
   }else if(player.y < 20){
    player.y++;
   }else if(player.y>440){
    player.y--;
   }else{
    controler = event.key;
   }



  /*var datadata = ctx.getImageData(player.x, player.y,101,171);
console.log( datadata);*/
   player.handleInput(controler);
}
/*
        // iterate over all pixels
        for(var i = 0, n = data.lengt*/
);
var allEnemies = [bug1,bug2,bug3];

/*character.prototype.move = function(){ return this.addEventListener('keypress', (event) => {

   let controler = event.key;
   console.log(controler);
   return controler;
})};

player.move().call(character);*/

function checkCollisions(){
  allEnemies.forEach(function(enemy) {

          const enemyX=  enemy.x;
          const enemyY=  enemy.y;
          const playerX= player.x;
          const playerY= player.y;
        const  enemyWidth = 101;
         const enemyHeight = 68;
         const playerHeight=67;
         const playerWeidth=77;
          if( enemyX< playerX + playerWeidth && enemyX + enemyWidth  > playerX &&
        enemyY < playerY + playerHeight && enemyY + enemyHeight> playerY) {

            console.log("hit");
                player.x = 200; 
                player.y = 400;
          }




         /*   if(enemy.x === player.x && enemy.y === player.y){
                console.log("hit");
                player.x = 200; 
                player.y = 400;

            }
        });*/
    })};