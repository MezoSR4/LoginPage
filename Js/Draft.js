
// inputs
var signUpName = document.getElementById('signUpName')
var signupEmail = document.getElementById('signupEmail')
var signupPassword = document.getElementById('signupPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')


//divs
var signIN = document.getElementById('signIN')
var signUp = document.getElementById('signUp')
var home = document.getElementById('home')
var Nav = document.getElementById('Nav')


// Regex
var EmailRegex = /[a-z A-Z 0-9]+@[(gmail)(yahoo)]+(.com)/



var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}

// ===============================================


//for check inputs is empty or not
function isEmpty() 
{
    if (signUpName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        return true
    } else {
        return false
    }
}

// =======================================



// for check email is message
function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signupEmail.value.toLowerCase == signUpArray[i].email.toLowerCase() ()) {
            return true
        }
    }
}


function signUp() {
    if (isEmpty() == true) {
        document.getElementById('message').innerHTML = '<span class="text-danger m-3">All inputs are required</span>'
        return false
    }
    // to store all value as object
    var signUpData = {
        name: signUpName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if(email.test(EmailRegex))
    {
        if (signUpArray.length == 0) {
            signUpArray.push(signUpData)
            localStorage.setItem('users', JSON.stringify(signUpArray))
            document.getElementById('message').innerHTML = '<span class="text-success m-3">Success</span>'
            return true
        }
        if (isEmailExist() == true) {
            document.getElementById('message').innerHTML = '<span class="text-danger m-3">email already exists</span>'
        } else {
            signUpArray.push(signUpData)
            localStorage.setItem('users', JSON.stringify(signUpArray))
            document.getElementById('message').innerHTML = '<span class="text-success m-3">Success</span>'
    
        }
    }
    else
    {
            document.getElementById('message').innerHTML = '<span class="text-dangerm-3">Please enter a valid Email</span>'
    }


}




// =============login================
//for check inputs is empty or not
function isLoginEmpty() {

    if (signinPassword.value == "" || signinEmail.value == "") {
        return true
    } else {
        return false
    }
}














function login() {
    if (isLoginEmpty() == true) {
        document.getElementById('message').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var password = signinPassword.value
    var email = signinEmail.value
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
            {
                localStorage.setItem('sessionUsername', signUpArray[i].name)
                var username = signUpArray[i].name
                  console.log(username)
                  if (username) {
                      document.getElementById('username').innerHTML = "Welcome " + username
                  }
                signIN.classList.add("d-none")
                home.classList.remove("d-none")
                Nav.classList.remove("d-none")


            }
        } else {
            document.getElementById('message').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }
}




// for logout
function logout() {
    localStorage.removeItem('sessionUsername')
    home.classList.add("d-none")
    signIN.classList.remove("d-none")
}

// to say welcome in home page


