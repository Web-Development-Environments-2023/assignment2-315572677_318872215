let dict_keyboard;

$(document).ready(function(){
    $("#upKey").keydown(function(event) { updateKeySetting(event,"up"); });
    $("#rightKey").keydown(function(event) { updateKeySetting(event,"right"); });
    $("#downKey").keydown(function(event) { updateKeySetting(event,"down"); });
    $("#leftKey").keydown(function(event) { updateKeySetting(event,"left"); });
    $("#fireKey").keydown(function(event) { updateKeySetting(event,"fire"); });
    $("#gameDuration").change(function(event) { updateDurationSetting(event); });
    dict_keyboard = {"up": "ArrowUp","right": "ArrowRight","down": "ArrowDown", "left": "ArrowLeft", "fire": " ", "gameDuration": 120};
    SetInitialFormValues();

    $("#settingForm").validate({
        rules: {
            gameDuration:
            {
                min: 120,
            },
            fireKey:
            {
                fireKeyboardChoose: true,
            }
        },
        messages: {
            gameDuration:
            {
                min: "Game duration must be at least 120 seconds",
            },
            fireKey:
            {
                fireKeyboardChoose: "Must contain only letters and space key!",
            }
        }
    });

});


function SetInitialFormValues(){
    dict_keyboard = {"up": "ArrowUp","right": "ArrowRight","down": "ArrowDown", "left": "ArrowLeft", "fire": " ", "gameDuration": 120};
    $("#upKey").val(dict_keyboard["up"]);
    $("#rightKey").val(dict_keyboard["right"]);
    $("#downKey").val(dict_keyboard["down"]);
    $("#leftKey").val(dict_keyboard["left"]);
    $("#fireKey").val("spaceBar");
    $("#gameDuration").val(120);
    document.getElementById('mouseGame').checked = false; // Uncheck
    document.getElementById('crosswise').checked = false; // Uncheck

}

function updateDurationSetting(event){
    dict_keyboard["gameDuration"] = event.target.value;
    durationGame = event.target.value;
    timeLeft = durationGame;
    console.log("New game duration: " + dict_keyboard["gameDuration"]);

    if (durationGame < 120) {
        durationGame = 120;
        timeLeft = durationGame;
        $("#gameDuration").val(durationGame);
        console.log("The game duration is less than 120, setting to 120.");
    }

}

function updateKeySetting(event, KeyType){
    if (!uniqueKey(event))
    {
        alert("Cannot choose the same key")
    }else{
        $("#"+KeyType+"Key").val(event.key);
        dict_keyboard[KeyType] = event.key;
    }

    // check for fireKey
    var regex = new RegExp("^[a-zA-Z ]+$");
    var key = String.fromCharCode(event.which).toLowerCase();
    if (!regex.test(key)) {
        event.preventDefault();
        alert("Must contain only letters and space key!")
        dict_keyboard[KeyType] = " ";
        event.target.value = dict_keyboard[KeyType];
    }
    else {
        $("#"+KeyType+"Key").val(event.key);
        dict_keyboard[KeyType] = event.key;
    }
  
}
  
function uniqueKey(event){
    const valid = $('#settingForm').valid();
    if (!valid) return false;
    for (let checkKey in dict_keyboard){
        if (event.key === dict_keyboard[checkKey]){
            return false;
        }
    }
    return true;
}

function saveSetting(){
    settingToGameDisplay();
    event.preventDefault();

    restartGame();
    newGameDuringGame();
}


$.validator.addMethod("fireKeyboardChoose",function(value) {
    return /^[a-zA-Z ]+$/.test(value);
}, "Must contain only letters and space key!");