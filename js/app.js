// Declaring results banner variables.

let hits = 0, best_score , score =0;
// Parent class for player and enemy objects.
class Character{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}
// Adding render method to parent class
Character.prototype.render = function(sprite,x,y){
    return ctx.drawImage(Resources.get(sprite),x,y);
}

/* Class for enemies our player must avoid 
   subclass from Character. */

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

// Adding update method to the Enemy class.

Enemy.prototype.update = function(dt){
        if(this.x <= 520 && this.flag === true){
            new Enemy(this.x+=dt*100, this.y);
            this.sprite = 'images/enemy-bug-croped.png';
                if(this.x > 520){
                    this.flag = false;
                 }
        }else if(this.x >=0 && this.flag === false){
            new Enemy(this.x-=dt*100, this.y);
            this.sprite = 'images/enemy-bug-croped-fliped.png';
                if(this.x < 0){
                    this.flag=true;
                }
        }

}
/*let stopwatch = 0;
Enemy.prototype.update = function(dt){
    stopwatch += dt;
    if(dt>=0.015){
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
            stopwatch = 0;
    }
}*/

// Enemy objects instantiated.

const bug1 = new Enemy(0,220),
      bug2 = new Enemy(0,305),
      bug3 = new Enemy(0,140);

const enemy_array = [bug1,bug2,bug3];

//Pushing enemy objects into the allEnemies array with time intervals.

let allEnemies = [];

enemy_array.forEach(
    function(enemy,index){
        setTimeout( function(){allEnemies.push(enemy)}, Math.random()* 3000*index )
});





// Player class subclass from Character with update and render methods.

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
    }  
}

//Handel Input method added to Hero class prototype object.

Hero.prototype.handleInput = function(controler){
    if(controler){
            switch(controler){
                        case /*'ArrowRight'*/39:
                       this.x += 5;
                        break;
                        case /*'ArrowLeft'*/37:
                        this.x -= 5;
                        break;
                        case /*'ArrowUp'*/38:
                        this.y -= 5;
                        break;
                        case /*'ArrowDown'*/40:
                        this.y += 5;
                    }
       } 

}

//instantiating a player object
var player = new Hero; 


/* Addin event listener for key presses and sends the keys to 
   Player.handleInput() method. */


document.addEventListener('keydown', (event) => {
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
        controler = event.which;
   }
   player.handleInput(controler);
});

// Checking collisions between enemy objects and player object.

function checkCollisions(){
  allEnemies.forEach(function(enemy) {

        const enemyX=  enemy.x;
              enemyY=  enemy.y,
              playerX= player.x,
              playerY= player.y,
              enemyWidth = enemy.width,
              enemyHeight = enemy.height,
              playerHeight= player.height,
              playerWeidth= player.width;

          if( enemyX< playerX + playerWeidth && enemyX + enemyWidth  > playerX &&
              enemyY < playerY + playerHeight && enemyY + enemyHeight> playerY){
                player.x = 200; 
                player.y = 400;
                hits++;
                document.querySelector("#hits").innerHTML = hits;
                //changing body background color on hits.
                toggle_body_BGcolor('red');
          }
    })
};

// Checking if the player passed to the other side.
function checkPassed(){
    const playerY= player.y;
    if(playerY===60){
        player.x = 200; 
        player.y = 400;
        score++;
        document.querySelector("#passed").innerHTML = score;
        //getting best score data
        bestRecord = sessionStorage.getItem("best");
        //setting best score data
        if(!(bestRecord) || bestRecord < score ){
            sessionStorage.setItem("best", score);
        }
        //Changing body background color.
        toggle_body_BGcolor('green');
    }
    if(sessionStorage.getItem("best")){
        document.querySelector("#bestScore").innerHTML = sessionStorage.getItem("best");
    }
}

/* A function that toggles the background color of the body 
ellemnt to a new color then back to  defult color. */


function toggle_body_BGcolor(color = false, defcolor = "yellow"){

    if( color ){
         document.body.style.backgroundColor = color;
         setTimeout(toggle_body_BGcolor,250); 
    }else{
        document.body.style.backgroundColor = defcolor;
        return;
    }
}
