playerFireImage = new Image();
enemyFireImage = new Image();
playerShipExplode = new Image();

playerFiresRight=[];
playerFires=[];
playerFiresLeft=[];

enemyFiresRight=[];
enemyFires = [];
enemyFiresLeft=[];
let opacity = 1;
lastHit = {"x":100,"y":80};
enemyFireSize ={x: 10, y: 30}


function setupFire(){ 
    playerFireImage.src = "images/firePlayer.png";
    enemyFireImage.src = "images/bulletEnemy.png";
    playerShipExplode.src = "images/shipExplode.png";
    playerFiresRight=[];
    playerFires=[];
    playerFiresLeft=[];
    
    enemyFiresRight=[];
    enemyFires = [];
    enemyFiresLeft=[];

    enemyFireSize["x"] = canvas.width/100;
    enemyFireSize["y"] = canvas.width/40;
}

function createEnemyFire(){
    row = Math.floor(Math.random() * 4);
    col = Math.floor(Math.random() * 5);
    fireDirect = Math.floor(Math.random() * 3)
    if (!document.getElementById('crosswise').checked){fireDirect=1}
    if (shipsStatus[row][col] == 1 && !existsEnemyFireAtTopScrren()){
        enemyFire = {"x": enemyPosition.x+(col+0.5)*enemyShipSize["x"],"y": enemyPosition.y+row*enemyShipSize["y"]};
        switch (fireDirect) {
            case 0: // Left
                enemyFiresLeft.push(enemyFire)
                break;
            case 1: // Center
                enemyFires.push(enemyFire)
                break;
            case 2: // Right
                enemyFiresRight.push(enemyFire)
                break;
        }     
    }
}

function moveFiers(){ 
        moveFiersArray(playerFiresLeft, -0.5, -1, 1) // moveFiersArray(firesArray, deltaX, deltaY, speedMultiplier)
        moveFiersArray(playerFires, 0, -1, 1)
        moveFiersArray(playerFiresRight, 0.5, -1, 1)
        moveFiersArray(enemyFiresLeft, -1, 1, getsSEnemypeedMultiplier())
        moveFiersArray(enemyFires, 0, 1, getsSEnemypeedMultiplier())
        moveFiersArray(enemyFiresRight, 1, 1, getsSEnemypeedMultiplier())
}

function moveFiersArray(firesArray, deltaX, deltaY, speedMultiplier){
    for (var i = 0; i < firesArray.length; i++) {
        firesArray[i].y += deltaY*speedMultiplier;
        firesArray[i].x += deltaX;
        if (firesArray[i].y > canvas.height || firesArray[i].y < 0 || firesArray[i].x > canvas.width || firesArray[i].x < 0){
            firesArray.splice(i,1);
        }
    }
}

function existsEnemyFireAtTopScrren(){
    if (existsEnemyFireAtTopScrrenHelper(enemyFiresLeft) || 
        existsEnemyFireAtTopScrrenHelper(enemyFires) || 
        existsEnemyFireAtTopScrrenHelper(enemyFiresRight)){
        return true;
    }
    return false;
}

function existsEnemyFireAtTopScrrenHelper(enemyFiresArray){
    for (var i = 0; i < enemyFiresArray.length; i++) {
        if (enemyFiresArray[i].y < canvas.height*0.75){
            return true;
        }
    }
    return false;
}
function drawFires(){ 
    // Player
    drawFiresHelper(playerFiresLeft, playerFireImage, 30, 30, -15, 0) // drawFiresHelper(firesArray, image, width, height, offsetX, offsetY)
    drawFiresHelper(playerFires, playerFireImage, 30, 30, -15, 0)
    drawFiresHelper(playerFiresRight, playerFireImage, 30, 30, -15, 0)
    // Enemy
    drawFiresHelper(enemyFiresLeft, enemyFireImage,  enemyFireSize["x"],  enemyFireSize["y"], 0, 0) 
    drawFiresHelper(enemyFires, enemyFireImage,  enemyFireSize["x"], enemyFireSize["y"], 0, 0)
    drawFiresHelper(enemyFiresRight, enemyFireImage,  enemyFireSize["x"], enemyFireSize["y"], 0, 0)
}

function drawFiresHelper(firesArray, image, width, height, offsetX, offsetY){
    for (var i = 0; i < firesArray.length; i++) {
        ctx.drawImage(image, firesArray[i].x + offsetX, firesArray[i].y + offsetY, width, height);
    }
}


function chakeCollision(){ 
    CheckCollisionWithPlayerFire(playerFiresLeft)
    CheckCollisionWithPlayerFire(playerFires)
    CheckCollisionWithPlayerFire(playerFiresRight)
    // check hit with enemy Fire
    CheckCollisionWithEnemyFire(enemyFiresLeft)
    CheckCollisionWithEnemyFire(enemyFires)
    CheckCollisionWithEnemyFire(enemyFiresRight)

}

function CheckCollisionWithPlayerFire(firesArray){
    enemyW = enemyShipSize["x"];
    enemyH = enemyShipSize["y"];
    for (var i = 0; i < firesArray.length; i++) { 
        for (let row = 0; row < 4; row++) { 
            for (let col = 0; col < 5; col++) {
                if(shipsStatus[row][col] == 1){
                    if(firesArray[i] && firesArray[i].x > enemyPosition.x+enemyW*col && firesArray[i].x < enemyPosition.x+enemyW*(col+1) 
                        && firesArray[i].y > enemyPosition.y+enemyH*row && firesArray[i].y < enemyPosition.y+enemyH*(row+1)){
                        shipsStatus[row][col] = 0;
                        firesArray.splice(i,1);
                        activeEnemyShip--;
                        updateScore(20-5*row)
                        playShot();
                    }
                }
            }
        }
    }
}

function CheckCollisionWithEnemyFire(enemyFiresArray){
    playerW = playerShipSize["x"];
    playerH = playerShipSize["y"];
    for (var i = 0; i < enemyFiresArray.length; i++) { 
        if(enemyFiresArray[i].x > playerPosition.x && enemyFiresArray[i].x < playerPosition.x+playerW 
            && enemyFiresArray[i].y > playerPosition.y&& enemyFiresArray[i].y < playerPosition.y+playerH){
                enemyFiresArray.splice(i,1);
                opacity = 1;
                drawExplode();
                lastHit = {x: playerPosition.x, y: playerPosition.y}
                reduceLife(); 
                setupPlyer()   //Returns the player to the starting position          
                playEnemyShotSuccessful();  
        }             
    }
}

// Define a function to draw the image with decreasing opacity
function drawExplode() {
  // Gradually decrease the opacity
  opacity -= 0.05;
  // Set the global alpha value to the current opacity
  ctx.globalAlpha = opacity;
  ctx.drawImage(playerShipExplode, lastHit.x-250, lastHit.y-250, 500, 500);
  // Reset the global alpha value
  ctx.globalAlpha = 1;
  // If the opacity is less than or equal to 0, stop drawing the image
  if (opacity <= 0) {
    return;
  }
    // Call the drawExplode function again
  requestAnimationFrame(drawExplode);
}


function pressMouse(){
    if(document.getElementById('mouseGame').checked){
        playerFires.push({"x": playerPosition.x+(playerShipSize["x"]/2),"y": playerPosition.y})	
    }
}