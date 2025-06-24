
// inputs
var signUpName = document.getElementById('signUpName')
var signupEmail = document.getElementById('signUpEmail')
var signupPassword = document.getElementById('signUpPassword')
var signinEmail = document.getElementById('signinEmail')
var signinPassword = document.getElementById('signinPassword')

// //divs
var signINDiv = document.getElementById('signIN')
var signUpDiv = document.getElementById('signUp')
var homeDiv = document.getElementById('home')

// Regex
var EmailRegex = /[a-z A-Z 0-9]+@[(gmail)(yahoo)]+(.com)/


var signUpArray = []
if (localStorage.getItem('users') == null) {
    signUpArray = []
} else {
    signUpArray = JSON.parse(localStorage.getItem('users'))
}

// // ===============================================

function goSignUp()
{
    signINDiv.classList.add("d-none");
    signUpDiv.classList.remove("d-none");
    signUpName.value = ""
    signupEmail.value = ""
    signupPassword.value = ""
    signinEmail.value = ""
    signinPassword.value = ""
    document.getElementById('message').innerHTML = ''
}

function goSignin()
{
    signUpDiv.classList.add("d-none");
    signINDiv.classList.remove("d-none");
    signUpName.value = ""
    signupEmail.value = ""
    signupPassword.value = ""
    signinEmail.value = ""
    signinPassword.value = ""
    document.getElementById('signUpMessage').innerHTML = ''
}

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
        if (signupEmail.value == signUpArray[i].email) {
            return true
        }
    }
}

function signUp() {
    if (isEmpty() == true) {
        document.getElementById('signUpMessage').innerHTML = '<span class="text-danger m-3">All inputs are required</span>'
        return false
    }
    // to store all value as object
    var signUpData = {
        name: signUpName.value,
        email: signupEmail.value,
        password: signupPassword.value,
    }
    if(EmailRegex.test(signUpData.email))
    {
        if (signUpArray.length == 0) {
            signUpArray.push(signUpData)
            localStorage.setItem('users', JSON.stringify(signUpArray))
            document.getElementById('signUpMessage').innerHTML = '<span class="text-success m-3">Success</span>'
            return true
        }
        if (isEmailExist() == true) {
            document.getElementById('signUpMessage').innerHTML = '<span class="text-danger m-3">email already exists</span>'
        } else {
            signUpArray.push(signUpData)
            localStorage.setItem('users', JSON.stringify(signUpArray))
            document.getElementById('signUpMessage').innerHTML = '<span class="text-success m-3">Success</span>'
    
        }
    }
    else
    {
            document.getElementById('signUpMessage').innerHTML = '<span class="text-danger m-3">Please enter a valid Email</span>'
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
        document.getElementById('message').innerHTML = '<span class="text-danger m-3">All inputs are required</span>'
        return false
    }
    var password = signinPassword.value
    var email = signinEmail.value
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email == email && signUpArray[i].password == password)
        {
            var username = signUpArray[i].name
            if (username)
            {
            document.getElementById('username').innerHTML = `Welcome ${username}`
            }
            signIN.classList.add("d-none")
            home.classList.remove("d-none")
            Nav.classList.remove("d-none")
            document.getElementById('message').innerHTML = ''

            return true;

        } 
        else {
            document.getElementById('message').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
            document.getElementById('loginBtn').classList.add(`wobble-hor-bottom`)
            document.getElementById('loginBtn').classList.remove(`btn-outline-info`)
            document.getElementById('loginBtn').classList.add(`btn-outline-danger`)

            setTimeout(() => {
            const btn = document.getElementById('loginBtn');
            btn.classList.remove('wobble-hor-bottom');
            btn.classList.remove('btn-outline-danger');
            btn.classList.add('btn-outline-info');
            }, 1500);

        }
    }
}

// for logout
function logout() {
    homeDiv.classList.add("d-none")
    Nav.classList.add("d-none")
    signINDiv.classList.remove("d-none")
    signUpName.value = ""
    signupEmail.value = ""
    signupPassword.value = ""
    signinEmail.value = ""
    signinPassword.value = ""
}