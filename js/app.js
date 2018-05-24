let hits = 0, best_score , score=0;

class Character{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

Character.prototype.render = function(sprite,x,y){
        return ctx.drawImage(Resources.get(sprite),x,y);}


// Enemies our player must avoid

class Enemy extends Character{
    constructor(x,y){
        super(x,y);
        this.sprite = 'images/enemy-bug-croped-fliped.png';
        this.width = 101;
        this.height=68;
        this.flag= true

    }
    render(){
    return super.render(this.sprite,this.x,this.y);
    }
}


/*Enemy.prototype.render = function(){
    return super.render(this.sprite,this.x,this.y);
    return ctx.drawImage(Resources.get(this.sprite),this.x,this.y);}*/
Enemy.prototype.update = function(dt){

        if(this.x <= 520 && this.flag === true){
            new Enemy(this.x+=2, this.y);
            this.sprite = 'images/enemy-bug-croped.png';
            if(this.x===520){
                this.flag = false;
            }
        }else if(this.x >=0 && this.flag === false){
            new Enemy(this.x-=2, this.y);
            this.sprite = 'images/enemy-bug-croped-fliped.png';
            if(this.x === 0){
                this.flag=true;
            }
            }
    }
 
    
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    








/*var Enemy = function(x,y) {

    
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x=x;
    this.y=y;
    this.sprite = 'images/enemy-bug-croped-fliped.png';
    this.width = 101;
    this.height=68;
    this.render = function(){
    return ctx.drawImage(Resources.get(this.sprite),this.x,this.y);

    }
    this.flag= true
    this.update = function(dt){*/
        /*switch(this.x){
            case 520:
            this.flag = false;
            break;
            case -20:
            this.flag=true;
            default:
            this.flag = true;
        }*/
      /*  if(this.x <= 520 && this.flag === true){
            Enemy(this.x+=2, this.y);
            this.sprite = 'images/enemy-bug-croped.png';
            if(this.x===520){
                this.flag = false;
            }
        }else if(this.x >=0 && this.flag === false){
            Enemy(this.x-=2, this.y);
            this.sprite = 'images/enemy-bug-croped-fliped.png';
            if(this.x === 0){
                this.flag=true;
            }
            }
    }

};*/

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
//};

// Draw the enemy on the screen, required method for game
//Enemy.prototype.render = function() {
 //   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
//};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Hero extends Character{
    constructor(){
       super(200,400);
       this.height=67;
       this.width=77;
       this.sprite = 'images/char-boy-croped.png';
    }
    update(){

        new Hero();
    
    }
    render(){
    return super.render(this.sprite,this.x,this.y);

      // ctx.drawImage(Resources.get(this.sprite), this.x , this.y);
    //  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    
}



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

Hero.prototype.handleInput = function(controler){
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

var player = new Hero; 


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






const bug1 = new Enemy(0,220);
const bug2 = new Enemy(0,305);
const bug3 = new Enemy(0,140);

const enemy_array = [bug1,bug2,bug3];
let allEnemies = [];
enemy_array.forEach(
    function(enemy,index){
setTimeout( function(){allEnemies.push(enemy)}, Math.random()* 3000*index )
});




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
        const  enemyWidth = enemy.width;
         const enemyHeight = enemy.height;
         const playerHeight=67;
         const playerWeidth=77;
          if( enemyX< playerX + playerWeidth && enemyX + enemyWidth  > playerX &&
        enemyY < playerY + playerHeight && enemyY + enemyHeight> playerY) {
                player.x = 200; 
                player.y = 400;
                hits++;
                document.querySelector("#hits").innerHTML = hits;
                toggle_body_BGcolor('red');

          }
 
          





         /*   if(enemy.x === player.x && enemy.y === player.y){
                console.log("hit");
                player.x = 200; 
                player.y = 400;

            }
        });*/
    })};

function checkPassed(){
          const playerY= player.y;
     if(playerY===60){
                player.x = 200; 
                player.y = 400;
                score++;
                document.querySelector("#passed").innerHTML = score;
                let bestRecord = sessionStorage.getItem("best");
                if(!(bestRecord) || bestRecord < score ){
                    sessionStorage.setItem("best", score);
                }
                        toggle_body_BGcolor('green');

        }
        document.querySelector("#bestScore").innerHTML = sessionStorage.getItem("best");
}




function toggle_body_BGcolor(color = false, defcolor = "yellow"){

if( color ){
     document.body.style.backgroundColor = color;
     setTimeout(toggle_body_BGcolor,250); 
}else{
    document.body.style.backgroundColor = defcolor;
    return;
}

}










/*

for(let i = 0 ; i<5, i++){

function toggle_body_BGcolor(color = false, defcolor = "yellow"){

if( color ){
     document.body.style.backgroundColor = color;
     console.log(color +'is color');
     setTimeout(toggle_body_BGcolor,500); 
     console.log(defcolor +' is defcolor');
}else{
    console.log('else');
    document.body.style.backgroundColor = defcolor;
    return;
}

}

}





function toggle_BGcolor(color = false, defcolor = "yellow",times=2000){


    let toggle_body = setInterval(

        function toggle_body_BGcolor(){

            if( color ){
                document.body.style.backgroundColor = color;
                console.log(color +'is color');
                setTimeout(toggle_body_BGcolor,250); 
                console.log(defcolor +' is defcolor');
            }else{
                console.log('else');
                document.body.style.backgroundColor = defcolor;
                return;
            }

        }, 1000 ,color,defcolor);

    setTimeout(clearInterval(),times,toggle_body);

}

document.addEventListener("onload", toggle_BGcolor('red'));

*/