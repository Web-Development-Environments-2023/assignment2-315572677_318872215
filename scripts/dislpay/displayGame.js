
function gameOverDialogToNewGameDisplay(){
    $("#gameOverDialog").hide();
    $("#logoutMenu").show();
    $("#settingMenu").show();
    $("#aboutMenu").show();
    $("#startGame").show();
    $("#pauseGame").show();
    $("#resumeGame").show();
    $("#muteGame").show();
    $("#volumeFader").show();
  }

  function settingToGameDisplay(){
    $("#settingContactScreen").hide();
    $("#gameContactScreen").show();
    $("#startGame").show();
    $("#pauseGame").show();
    $("#resumeGame").show();
    $("#settingMenu").show();
  }