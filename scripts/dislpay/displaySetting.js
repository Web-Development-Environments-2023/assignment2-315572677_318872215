function SettingMenuButtonToSettingDisplay(){
    pauseGame(); 
    $("#settingContactScreen").show();
    $("#loginContentScreen").hide();
    $("#welcomeMenu").hide();
    $("#registerMenu").hide();
    $("#loginMenu").hide();
    $("#settingMenu").hide();
    $("#logoutMenu").show();
    $("#startGame").hide();
    $("#pauseGame").hide();
    $("#resumeGame").hide();
    event.preventDefault();
}

function LoginToSettingDisplay(){
    $("#settingContactScreen").show();
    $("#loginContentScreen").hide();
    $("#welcomeMenu").hide();
    $("#registerMenu").hide();
    $("#loginMenu").hide();
    $("#settingMenu").show();
    $("#logoutMenu").show();
    showLoginUsername();
    event.preventDefault();
}

function GameOverDialogToSettingDisplay(){
    $("#settingContactScreen").show();
    $("#gameOverDialog").hide();
    $("#muteGame").show();
    $("#volumeFader").show();

    event.preventDefault();

    // newGameDuringGame();

}