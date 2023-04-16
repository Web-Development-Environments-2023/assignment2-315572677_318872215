enemyPosition = {x: 10, y: 40}
direction = 1; //move left or right
shipsStatus = [4]; //[row]
enemyStartShip = new Image();
activeEnemyShip = 20;
enemyShipSize ={x: 50, y: 50}
crosswise = false; // move the enemyShip crosswise

function setupEnemyShips(){
    enemyStartShip.src = "images/enemyShip.png";
    enemyPosition = {x: 10, y: 40}
    activeEnemyShip = 20;
    for (let row = 0; row < 4; row++) {  // define all Enemy ships as active
        shipsStatus[row] = [1,1,1,1,1];
    }
}

function getsSEnemypeedMultiplier(){
    if ((durationGame - timeLeft)>15){
        return 4;
    }
    else if ((durationGame - timeLeft)>10){
        return 3;
    }
    else if ((durationGame - timeLeft)>5){
        return 2;
    }
    else{
        return 1;
    }
}



let t = 0; // Initialize time variable

function moveEnemyShips() {

    if(document.getElementById('crosswise').checked){
        t += (getsSEnemypeedMultiplier()*0.002); // Increment time

        // Calculate x and y position using sine and cosine functions
        let x = (canvas.width-(enemyShipSize["x"]*5)) / 2 + Math.sin(t) * ((canvas.width-(enemyShipSize["x"]*5)) / 2 - enemyShipSize["x"]);
        let y = canvas.height * 0.2 + Math.cos(t) * canvas.height * 0.1 - 25;
    
        if(enemyPosition.x > canvas.width-(enemyShipSize["x"]*5) || enemyPosition.x < 0){
            direction *= -1;
        }    
    
        // Update enemy position
        enemyPosition.x = x;
        enemyPosition.y = y;
    }
    else{
        enemyPosition.x += (getsSEnemypeedMultiplier()*0.4)*direction;
        if(enemyPosition.x > canvas.width-(enemyShipSize["x"]*5) || enemyPosition.x < 0){
            direction *= -1;
        }   
    }
}

function drawEnemyShips(){ 
    enemyW = enemyShipSize["x"];
    enemyH = enemyShipSize["y"];
    for (let row = 0; row < 4; row++) { 
        for (let col = 0; col < 5; col++) {
            if(shipsStatus[row][col] == 1){
                ctx.drawImage(enemyStartShip, enemyPosition.x+enemyW*col, enemyPosition.y+enemyH*row, enemyW, enemyH);
            }
        }
    }
}