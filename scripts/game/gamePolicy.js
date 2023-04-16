$(document).ready(function(){
  $("#NewGameGameOverDialog").click(newGameDialog); 
  $("#SettingsGameOverDialog").click(GameOverDialogToSettingDisplay); 
});

function checkGameOver(){
  if (lifeLeft === 0 || timeLeft === 0 || activeEnemyShip === 0){
      gameOver();
  }
}


function newGameDialog(){
  gameOverDialogToNewGameDisplay();
  // restartGame();
  newGameDuringGame();
}

function checkGameOver(){
  if (lifeLeft === 0 || timeLeft === 0 || activeEnemyShip === 0){
      gameOver();
  }
}


  function gameOver(){
    LastGameRecorde = [playerScore, durationGame-timeLeft,new Date().toLocaleString()];
    recordsData.push(LastGameRecorde);
    pauseGame();
    displayScore(); 
    if (lifeLeft <= 0){
      $("#endGameText").html("Game Over:<br>You Lost");
    }
    if (timeLeft === 0){
      if (playerScore < 100){
        $("#endGameText").html("Game Over:<br>You can do better. Your score game is: " + playerScore + " points!");
      }
      else{
        $("#endGameText").html("Game Over:<br>Winner! Your score game is: " + playerScore + " points!");
      }
    }
    if (activeEnemyShip === 0){
      $("#endGameText").html("Game Over:<br>Champion!");
    }
    $("#endheaderText").html("Game Over!");
    gameToGameOverDisplay();
  }


  function reduceLife(){
    switch (lifeLeft) { 
      case 3:
        document.getElementById('heart3').style.visibility='hidden';
        break;
      case 2:
        document.getElementById('heart2').style.visibility='hidden';
        break;
      case 1:
        document.getElementById('heart1').style.visibility='hidden';
        break;
    } 
    lifeLeft--;
  }

  function updateScore(addedScore) {
    // Get the time remaining element
    var scoreGameEl = document.getElementById("scoreGame");
    playerScore += addedScore;
    scoreGameEl.textContent = playerScore;
  }

function displayScore(){
    printLestGame = 0; 
    maxRecordsToShow = 4; //taken down 1 to the number of records you want to show
    canvas2 = document.getElementById("canvas2");
  	ctx2 = canvas2.getContext("2d");
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.font = "bold 24px Arial";
    ctx2.fillStyle = "white"; 
    ctx2.fillText("Place", 5, 25); 
    ctx2.fillText("Score", 80, 25);
    ctx2.fillText("Date", 160, 25);
    sortedRecordsData = recordsData;
    sortedRecordsData.sort((record1,record2) => record2[0]-record1[0]);   
    for (let i = 0; i < sortedRecordsData.length; i++) {
      ctx2.fillStyle = "white";
        if(sortedRecordsData[i] === LastGameRecorde || (i===maxRecordsToShow && printLestGame===0)){ //print last game
          printLestGame = 1;
          ctx2.fillStyle = "yellow";
          let place = getPlaceRecord(sortedRecordsData,LastGameRecorde);
          let score = LastGameRecorde[0];
          let date = LastGameRecorde[2];
          ctx2.fillText(place, 5, 50 + i * 30);      
          ctx2.fillText(score, 80, 50 + i * 30);
          ctx2.fillText(date, 160, 50 + i * 30);
          ctx2.fillStyle = "white";
        } 
        else{ 
          let score = sortedRecordsData[i][0];
          let date = sortedRecordsData[i][2];
          ctx2.fillText(i+1, 5, 50 + i * 30);      
          ctx2.fillText(score, 80, 50 + i * 30);
          ctx2.fillText(date, 160, 50 + i * 30);
        }
        if (i===maxRecordsToShow){  break;  }
    }    
}
function getPlaceRecord(sortedRecordsData,LastGameRecorde){
  for (let i = 0; i < sortedRecordsData.length; i++) {
    if(sortedRecordsData[i] === LastGameRecorde){
      return i+1;
    }
  }
}