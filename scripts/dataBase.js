let userLogin = null;
const database = [
    {
    username: "p",
    password: "testuser",
    firstname: "Tester",
    lastname: "Tester",
    email: "test@test.com",
    birthDate: "02/04/2023"
    },
];



function addUser(username, password, firstname, lastname, email, birthDate ) {
    newUser = {
        username: username,
		password: password,
        firstname: firstname,
        lastname: lastname,
        email: email,
        dateOfBirth: birthDate
    }
    database.push(newUser);
}


function isUserValid(user, pass) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === user && database[i].password === pass) {
            return true;
        }
    }
    return false;
}


function userLoginDisplay(user, pass) {
    const userRecord = database.find(record => record.username === user && record.password === pass);
    if (userRecord) {
      return userRecord.firstname ;
    } else {
      return "";
    }
  }
    

function loginSubmit(){
    var $inputs = $('#loginForm :input');
    var values = {};
    $inputs.each(function() {
        values[this.name] = $(this).val();
    });
    console.log(values);
    if(isUserValid(values["username"], values["password"])){
        // userLogin = values["username"];
        userLogin = userLoginDisplay(values["username"], values["password"])
        console.log(userLogin);
        SetInitialFormValues();
        LoginToSettingDisplay();
    }
    else {
        alert("Invalid username or password");
        showLoginScreen();
    }
}

