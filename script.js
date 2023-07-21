let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
    login.classList.remove("active");
    navbar.classList.remove("active");
    shoppingCart.classList.remove("active");
}


let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
    shoppingCart.classList.toggle("active");
    searchForm.classList.remove("active");
    login.classList.remove("active");
    navbar.classList.remove("active");
}


let login = document.querySelector(".login");

document.querySelector("#login-btn").onclick = () => {
    login.classList.toggle("active");
    searchForm.classList.remove("active");
    navbar.classList.remove("active");
    shoppingCart.classList.remove("active");
}

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle("active");
    searchForm.classList.remove("active");
    login.classList.remove("active");
    shoppingCart.classList.remove("active");
}
