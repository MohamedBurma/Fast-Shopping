let userNameNav = document.querySelector("#userNameNav")
let getUserName = localStorage.getItem("userName")
let userInfo = document.querySelector("#userInfo")
let login = document.querySelector(".login")
let shopping_cart = document.querySelector(".shopping_cart")

if (getUserName) {
    userNameNav.innerHTML = getUserName
    userInfo.style.display = "block"
    shopping_cart.style.display = "block"
    login.style.display = "none"
}

let logOutBtn = document.querySelector("#logOut");
logOutBtn.addEventListener("click", function () {
    localStorage.clear()
    setTimeout(() => {
        window.location = "login.html"
    }, 1000)
})