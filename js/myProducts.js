let ProductsInCart = localStorage.getItem("ProductsInCart")
let allProducts = document.querySelector(".Products")

if(ProductsInCart) {
    let item = JSON.parse(ProductsInCart)
    drawItems(item)
}

function drawItems(carItems) {
    let x = carItems.map((car_item) => {
        return `
        
        
        <div class="col-md-3">
        <img src="${car_item.itemImg}" class="prduct_img">
          <h3 class="fs-2 text-body-emphasis">${car_item.itemName}</h3>
          <p>${car_item.itemDet}</p>
          <button class="add btn btn-success" onClick="removeFromCart(${car_item.id})"><i class="fas fa-cart-plus"></i></button>
        </div>

        `
    })

    allProducts.innerHTML = x
}

// cartProdId = localStorage.getItem("ProductsInCart")

// function removeFromCart(id) {

// }