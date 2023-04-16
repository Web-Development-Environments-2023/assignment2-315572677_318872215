playerPosition = {    x: 300,    y: 400} //temp val
playerStarShip = new Image();
playerShipSize ={x: 50, y: 50}

var selectedShip = "images/starShip.png"; // Initialize selected ship to empty string

function selectShip(shipImage) {
    switch (shipImage) {
        case "images/starShip.png":
            document.getElementById("spaceShip1").style.backgroundColor = "lightblue";
            document.getElementById("spaceShip2").style.backgroundColor = "white";
            document.getElementById("spaceShip3").style.backgroundColor = "white";
            break;
        case "images/starShip2.png":
            document.getElementById("spaceShip1").style.backgroundColor = "white";
            document.getElementById("spaceShip2").style.backgroundColor = "lightblue";
            document.getElementById("spaceShip3").style.backgroundColor = "white";
            break;
        case "images/starShip3.png":
            document.getElementById("spaceShip1").style.backgroundColor = "white";
            document.getElementById("spaceShip2").style.backgroundColor = "white";
            document.getElementById("spaceShip3").style.backgroundColor = "lightblue";
            break;
    }
    selectedShip = shipImage; // Set selected ship to the clicked image
}

function setupPlyer(){
    playerPosition["x"]=Math.floor(Math.random() * canvas.width-playerShipSize["x"]);
    playerPosition["y"]=canvas.height-playerShipSize["y"]*2;
    playerStarShip.src = selectedShip;
    
}

function drawPlayerShips(){ 
    ctx.drawImage(playerStarShip, playerPosition.x, playerPosition.y, playerShipSize["x"], playerShipSize["y"]);
}


function moveParams(){
    if(document.getElementById('mouseGame').checked){
        playerPosition.x = window.event.offsetX;
        playerPosition.y = window.event.offsetY;
        if (window.event.offsetY < (canvas.height * 0.6)) {
            playerPosition.y = canvas.height * 0.6;
        }
        if (window.event.offsetX > canvas.width - playerShipSize["x"]) {
            playerPosition.x = canvas.width - playerShipSize["x"];
        }
        if (window.event.offsetY > canvas.height - playerShipSize["y"]) {
            playerPosition.y = canvas.height - playerShipSize["y"];
        }
        if (window.event.offsetX < 0) {
            playerPosition.x = 0;
        }
    }
}


function updatePlayerPosition() {

    if (keys[dict_keyboard["up"]] && playerPosition.y > (canvas.height * 0.6)) {
        playerPosition.y -= 1;
    }
    if (keys[dict_keyboard["right"]] && playerPosition.x < canvas.width - playerShipSize["x"]) {
        playerPosition.x += 1;
    }
    if (keys[dict_keyboard["down"]] && playerPosition.y < canvas.height - playerShipSize["y"]) {
        playerPosition.y += 1;
    }
    if (keys[dict_keyboard["left"]] && playerPosition.x > 0) {
        playerPosition.x -= 1;
    }
    if (keys[dict_keyboard["up"]] && keys[dict_keyboard["right"]] && playerPosition.y > (canvas.height * 0.6) && playerPosition.x < canvas.width - playerShipSize["x"]) {
        playerPosition.y -= 1;
        playerPosition.x += 1;
    }
    if (keys[dict_keyboard["down"]] && keys[dict_keyboard["right"]] && playerPosition.y < canvas.height - playerShipSize["y"] && playerPosition.x < canvas.width - playerShipSize["x"]) {
        playerPosition.y += 1;
        playerPosition.x += 1;
    }
    if (keys[dict_keyboard["down"]] && keys[dict_keyboard["left"]] && playerPosition.y < canvas.height - playerShipSize["y"] && playerPosition.x > 0) {
        playerPosition.y += 1;
        playerPosition.x -= 1;
    }
    if (keys[dict_keyboard["up"]] && keys[dict_keyboard["left"]] && playerPosition.y > (canvas.height * 0.6) && playerPosition.x > 0) {
        playerPosition.y -= 1;
        playerPosition.x -= 1;
    }

}
