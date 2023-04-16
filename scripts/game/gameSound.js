var pause_game = false;
const fader = document.getElementById("volumeFader")
let userVolume = 100;

var bgMusic = new Audio("sound\\background.mp3")
bgMusic.volume = 0.4;

var shot = new Audio("sound\\playShot.mp3")
// var shot = new Audio("sound/PewEffect.mp3")
shot.volume = 0.1;
// Set the number of seconds to wait before starting the music
var delayInMiliSecond = 2;

var enemyShotSuccessful = new Audio("sound\\enemyKill.mp3")
enemyShotSuccessful.volume = 0.2;




function playSound(){
    bgMusic.play();
}

function stopSound(){
    bgMusic.pause();
}

function playShot(){
    shot.play();
}

function playEnemyShotSuccessful(){
    enemyShotSuccessful.play();
}



function setUserVolume( theVolume ) {
    // console.log(theVolume)
    if(theVolume == 0){
        muteGame();
    }
    else{
        unMuteGame();
    }
    setVolume( theVolume );
}

function setVolume( theVolume ) {
    bgMusic.volume = 0.01*theVolume;
}