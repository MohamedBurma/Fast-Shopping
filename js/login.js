let email = document.querySelector("#email")
let password = document.querySelector("#password")
let msg_fill = document.querySelector(".msg_fill")
let msg_error = document.querySelector(".msg_error")
let btnLogin = document.querySelector("#btnLogin")

let getEmail = localStorage.getItem("email")
let getPassword = localStorage.getItem("password")

btnLogin.addEventListener("click", function(e) {
    e.preventDefault()

    if(email.value === "" || password.value === ""){
        msg_fill.style.display = "block"
        msg_error.style.display = "none"
    } else {
        if(getEmail && getEmail.trim() === email.value.trim() && password.value === getPassword) {
            setTimeout( () => {
                window.location = "index.html"
            }, 1500)
        } else {
            msg_error.style.display = "block"
            msg_fill.style.display = "none"
        }
    }
})