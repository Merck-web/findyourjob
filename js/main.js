const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar");
const closeMenuButton = document.querySelector(".close-bt");


menuButton.addEventListener("click", (event)=>{
    menu.classList.toggle("is-open");

})

closeMenuButton.addEventListener("click", (event)=>{
    menu.classList.toggle("is-open");
    
})