// Enemies our player must avoid
var Enemy = function(x,y) {

    
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x=x;
    this.y=y;
    this.sprite = 'images/enemy-bug.png';
    this.render = function(){
    return ctx.drawImage(Resources.get('images/enemy-bug.png'),this.x,this.y);

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
            if(this.x===520){
                this.flag = false;
            }
        }else if(this.x >=0 && this.flag === false){
            Enemy(this.x--, this.y);
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


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


/*class characters{
    constructor(){
        this.body = ['char-boy.png','char-cat-girl.png','char-horn-girl.png','char-pink-girl.png',
        'char-princess-girl.png','enemy-bug.png'];
        this.width= canvas.width/20;
        this.hieght = canvas.hieght/20; 
    }

}*/

class hhh{
    constructor(){
       this.x = 200;
       this.y = 400;
       let body = Resources.get('images/enemy-bug.png');
    }
    update(newX, NewY){
        this.x = 200;
        this.y = 400;
    }
    render(){
       ctx.drawImage(Resources.get('images/char-boy.png'),this.x,this.y);
    //  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    move(){

    }
}
var player = new hhh; 




var bug1 = new Enemy(0,140);
var bug2 = new Enemy(0,225);
var bug3 = new Enemy(0,60);


var allEnemies = [bug1,bug2,bug3];
