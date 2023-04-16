



function RegisterMenuButtonToRegisterDisplay(){
    // Content screen
    $("#registerContentScreen").show();
    $("#registerForm")[0].reset();
    $("#welcomeContentScreen").hide();
    $("#loginContentScreen").hide();

}
function RegisterWelcomeButtonToRegisterDisplay(){
    RegisterMenuButtonToRegisterDisplay();
}