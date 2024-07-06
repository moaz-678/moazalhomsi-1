let navbar = document.querySelector(".navbar");

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle("active")
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
}
let searchForm = document.querySelector(".search-form");
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle("active")
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
}

let cartItem =document.querySelector(".cart-items-container");

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle("active")
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
}
window.onscroll = () =>{
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
    cartItem.classList.remove("active");
}



var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    navigation:{
    
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
}
})
var swiper = new Swiper(".food-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        700: {
          slidesPerView: 5,
        },
        1000: {
          slidesPerView: 3,
        },
      },
})
