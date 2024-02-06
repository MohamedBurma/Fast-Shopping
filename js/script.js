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

// items

let allCarItems = document.querySelector(".car_items")
let carItems = [
    {
        id: 1,
        itemName: "Galaxy A54 5G",
        itemImg: "images/1.png",
        itemDet: "With a brighter display, more advanced camera, and long battery life, the newest member of the Galaxy A54 5G will be available for preorder starting March 30 in the U.S."

    },
    {
        id: 2,
        itemName: "Galaxy A13 4G",
        itemImg: "images/2.png",
        itemDet: "El Galaxy A13 combina colores suaves con sus refinadas curvas lo hacen cómodo de sostener entregando una fácil navegación por la pantalla  con el lente principal de 50 MP."

    },
    {
        id: 1,
        itemName: "Galaxy A54 5G",
        itemImg: "images/1.png",
        itemDet: "With a brighter display, more advanced camera, and long battery life, the newest member of the Galaxy A54 5G will be available for preorder starting March 30 in the U.S."

    },
    {
        id: 2,
        itemName: "Galaxy A13 4G",
        itemImg: "images/2.png",
        itemDet: "El Galaxy A13 combina colores suaves con sus refinadas curvas lo hacen cómodo de sostener entregando una fácil navegación por la pantalla  con el lente principal de 50 MP."

    }
]

function drawCarItems() {
    let x = carItems.map((car_item) => {
        return `
        
        
        <div class="col-md-3 cards">
        <img src="${car_item.itemImg}" class="prduct_img">
          <h3 class="fs-2 text-body-emphasis">${car_item.itemName}</h3>
          <p>${car_item.itemDet}</p>
            <button class="add btn btn-success cards_btn" onClick="addToCart(${car_item.id})"><i class="fas fa-cart-plus"></i></button>
            <i class="far fa-heart cards_heart"></i>
        </div>

        `
    })

    allCarItems.innerHTML = x
}

drawCarItems();

let badge = document.querySelector(".badge")
let carts_products_div = document.querySelector(".carts_products div")
let addedItem = localStorage.getItem("ProductsInCart") ? JSON.parse(localStorage.getItem("ProductsInCart")) : [];

if(addedItem) {
    addedItem.map( item => {
        carts_products_div.innerHTML += `<p>${item.itemName}</p>`
    })

    badge.style.display = "block"
    badge.innerHTML = addedItem.length
}

if (localStorage.getItem("userName")) {

    function addToCart(id) {
        let choosenItem = carItems.find((item) => item.id === id);
        carts_products_div.innerHTML += `<p>${choosenItem.itemName}</p>`;

        addedItem = [...addedItem, choosenItem]
        localStorage.setItem("ProductsInCart", JSON.stringify(addedItem))

        let cartProductLength = document.querySelectorAll("carts_products div p")
        badge.style.display = "block"
        badge.innerHTML = cartProductLength.length

    }
} else {
    window.location = "login.html"
}