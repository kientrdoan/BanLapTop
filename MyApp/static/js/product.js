// import { drawNoCart } from "./cart.js";
// import { drawCart } from "./cart.js";

var productList = []

var clickAddCart = document.querySelector(".btn-add-cart");

if(clickAddCart){
    clickAddCart.addEventListener("click", ()=>{
        var info_product = {}
        var elementName = document.getElementById("product-name")
        var elementImg = document.getElementById("product-img")
        var elementPrice = document.getElementById("product-price")
        var price = elementPrice.innerText
        var name = elementName.innerText
        var urlImg = elementImg.getAttribute("src")
        info_product["price"] = price
        info_product["name"] = name
        info_product["src"] = urlImg
        console.log(info_product)
    })
}