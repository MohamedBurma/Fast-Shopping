let itemName = document.querySelector("#itemName")
let itemDetails = document.querySelector("#itemDetails")
let itemImage = document.querySelector("#itemImage")
let itemPrice = document.querySelector("#itemPrice")
let btnAddItems = document.querySelector("#btnAddItems")

btnAddItems.addEventListener("click", function(e) {
    e.preventDefault()

    localStorage.setItem("itemName", itemName.value)
    localStorage.setItem("itemDetails", itemDetails.value)
    localStorage.setItem("itemImage", itemImage.value)
    localStorage.setItem("itemPrice", itemPrice.value)

    setTimeout( () => {
        window.location = "addItems.html"
    }, 500)
})