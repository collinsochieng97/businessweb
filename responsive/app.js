const theCart = document.querySelector("nav .cart")
const cartSidebar = document.querySelector(".cart-sidebar")
const closeCart = document.querySelector(".close-cart")
const burger = document.querySelector(".burger")
const menuSidebar = document.querySelector(".menu-sidebar")
const closeMenu = document.querySelector(".close-menu")
const cartItemsTotal = document.querySelector(".noi")
const cartPriceTotal = document.querySelector(".total-amount")
const cartUi = document.querySelector(".cat-sidebar .cat")
const totalDiv = document.querySelector(".total-sum")
const clearBtn = document.querySelector(".clear-cart-btn")
const cartContent = document.querySelector(".cart-content")

let cart = [];
let buttonDOM = [];

theCart.addEventListener("click", function() {
    cartSidebar.style.transform = "translate(0%)"
    const bodyOverlay = document.createElement("div")
    bodyOverlay.classList.add("overlay");
    setTimeout(function() {
        document.querySelector("body").append(bodyOverlay)
    }, 300)
})
closeCart.addEventListener("click", function() {
    cartSidebar.style.transform = "translate(100%)"
    const bodyOverlay = document.querySelector(".overlay")
    document.querySelector("body").removeChild(bodyOverlay)
})

burger.addEventListener("click", function() {
    menuSidebar.style.transform = "translate(0%)"
})

closeMenu.addEventListener("click", function() {
    menuSidebar.style.transform = "translate(-100%)"
})

class Product {
    async getProduct() {
        const response = fetch("products.json");
        const data = await response.json();
        let products = products.map(item => {
            const { title, price } = item.fields;
            const { id } = item.sys;
            const image = item.fields.image.fields.file.url;
            return { title, price, id, image };
        })
        return products;
    }
}
/* this is the side for user interface*/
class UI {
    displayProducts(products) {
        let result = "";
        products.forEach(product => {
            const productDiv = document.createElement("div")
            productDiv.innerHTML = < div class = "product-card" >
                <
                img src = "${product.image}"
            alt = "product" > < /img> <
                span class = "add-to-cart"
            data - id = "${product.id}" >
                <
                i class = "fa fa-cart--plus far-1x"
            style = "marginRight: 1em; fontSize: 1em;" > < /i></span >

                <
                /div>

        });
    }
}