$(document).ready(function(){
    $("#registerButton").click(RegisterWelcomeButtonToRegisterDisplay); // Middle button
    stopSound();


    // https://jazzteam.org/en/technical-articles/implementation-validation-with-jquery-validation-plugin/
    $("#registerForm").validate({
        rules: {
            username: {
                required: true,
            },
            password: { 
                required: true,
                minlength: 8,
                alphaNumeric: true,
            },
            passwordconfirm: {
                required: true,
                minlength: 8,
                alphaNumeric: true,
                equalTo: "#password"
            },
            firstname: {
                required: true,
                lettersOnly: true
            },
            lastname: {
                required: true,
                lettersOnly: true
            },
            email: {
                required: true,
                email: true
            },
            dateOfBirth: {
                required: true,
                date: true
            },
        },

        messages: {
            userName: {
                required: "Username is missing",
            },
            password: {
                required: "Password is missing",
                minlength: "Must be at least 8 characters",
                alphaNumeric: "Must contain only letters and numbers"
            },
            passwordconfirm: {
                required: "Password is missing",
                minlength: "Must be at least 8 characters",
                alphaNumeric: "Must contain only letters and numbers",
                equalTo: "Password does not match"
            },
            firstname: {
                required: "first name is missing",
            },
            lastName: {
                required: "last name is missing",
            },
            email: {
                required: "Email is missing",
                email: "Email is not valid"
            },
            dateOfBirth: {
                required: "birth date is missing",
                date: "The date is worng"
            }
        },
        errorPlacement: function (error, element) {
        error.insertAfter(element)
        .wrap('<p><span class="errorContainer"><span class="arrow"></span></span></p>');
        },

        submitHandler: function(event){
            //make function for register and move to login screen
            registerSubmit();
        }

    });

});




$.validator.addMethod("alphaNumeric",function(value) {
    return /^[A-z0-9\d=!\-@._*]*$/.test(value) && /[A-z]/.test(value) && /\d/.test(value);
}, "Must contain only letters and numbers");

$.validator.addMethod("lettersOnly", function(value, element) {
    return this.optional(element) || /^[a-z ]+$/i.test(value);
}, "Must contain only letters");

// check if we need to valid for currect year, for example we cant register in 1/1/2026


function registerSubmit(){
    var $inputs = $('#registerForm :input');
    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });

    addUser(values["username"], values["password"], values["firstname"], 
               values["lastname"], values["email"],values["birthDate"]);
    showLoginScreen();
}



