
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
    openFullscreen();
  }


  function openFullscreen() {
    var elem = document.getElementById("canvas");
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
      document.documentElement.msRequestFullscreen();
    }
  }
  