$(document).ready(function(){
    $("#aboutMenu").click(function(){
        $("#aboutContentDialog").show();
    });
    $("#closeAboutContentDialog").click(function(){
        $("#aboutContentDialog").hide();
    })
    stopSound();
});


$(document).mouseup(function(event) {
    var dialog = $("#aboutContentDialog");
    var target = $(event.target);
    if (!target.is(dialog) && !dialog.has(target).length) {
        dialog.hide();
    }
});

document.addEventListener('keyup', function (event) {
    if (event.keyCode == 27 )   { // Press ESC key...
        $("#aboutContentDialog").hide();  
    }
  })

