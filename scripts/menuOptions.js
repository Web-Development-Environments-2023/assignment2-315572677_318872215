$(document).ready(function(){
    $("#settingMenu").click(goSettingScreens);
    stopSound();
    $("#welcomeMenu").click(showWelcomeScreen);
    $("#registerMenu").click(RegisterMenuButtonToRegisterDisplay);
    $("#logoutMenu").click(logoutAndShowScreens);



    //////////////////////////////////////////////////////////////////
        /////////////////////////TOdo //////////////////////////////////
        // $("#tempGameMenu").hide();

        $("#tempGameMenu").click(function(){
            showLoginScreen();
            showGameScreen();
            setup()
            startGameLoop()
    
        });
        //////////////////////////////////////////////////////////////////
});

function goSettingScreens(){
    pauseGame(); 
    SettingMenuButtonToSettingDisplay();
}

function showWelcomeScreen(){ 
    // content screen
    $("#welcomeContentScreen").show();
    $("#registerContentScreen").hide();
    $("#loginContentScreen").hide();
    if (backgroundMusic){
        stopSound();
    }
}
function logoutAndShowScreens(){ 
    $("#gameContactScreen").hide();
    $("#settingContactScreen").hide();
    $("#gameOverDialog").hide();

    $("#logoutMenu").hide();
    $("#settingMenu").hide();
    $("#welcomeContentScreen").show();
    $("#registerMenu").show();
    $("#welcomeMenu").show();
    $("#loginMenu").show();

    logoutUser();
}