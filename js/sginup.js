let userName = document.querySelector("#userName")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let msg_fill = document.querySelector(".msg_fill")
let btnSginUp = document.querySelector("#btnSginUp")

btnSginUp.addEventListener("click", function(e) {
    e.preventDefault()

    if(userName.value === "" || email.value === "" || password.value === "") {
        msg_fill.style.display = "block"
    }
    else
    {
        msg_fill.style.display = "none"

        localStorage.setItem("userName", userName.value)
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)

        setTimeout( () => {
            window.location = "login.html"
        }, 1500)
    }
})