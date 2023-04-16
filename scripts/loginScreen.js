$(document).ready(function(){
    $("#loginMenu").click(showLoginScreen); // Top menu
    $("#loginButton").click(showLoginScreen); // WelcomeScreen button
    stopSound();
});

function showLoginScreen(){
    // Content screen
    $("#loginContentScreen").show();
    $("#loginForm")[0].reset();
    $("#welcomeContentScreen").hide();
    $("#registerContentScreen").hide();
}

function showGameScreen(){ 
    $("#gameContactScreen").show();
    $("#logoutMenu").show();
    $("#settingMenu").show();
    $("#registerMenu").hide();
    $("#welcomeMenu").hide();
    $("#loginMenu").hide();
    $("#loginContentScreen").hide();
    event.preventDefault();

}

function showLoginUsername(){
    // $("#loginUsername").show();
    // $("#loginUsername").text("Hello: " + userLogin);

    $("#logoutMenu").show();
    $("#logoutMenu").text("Logout " + userLogin);
}