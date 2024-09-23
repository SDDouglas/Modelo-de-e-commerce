const navbar = document.querySelector(".navbar");
const menuButtom = document.querySelector("#list");

menuButtom.addEventListener('click', () =>{
    navbar.classList.toggle("show-menu")
});