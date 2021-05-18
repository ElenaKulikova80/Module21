const menuBurger=document.querySelector(".mobile__burger");
const menu=document.querySelector(".menu__mobile");
const menuCloseBtn=document.querySelector(".menu__mobile-close");

function openMenu(){
    menu.classList.add("is-active");
}
function closeMenu(){
    menu.classList.remove("is-active");
}

export function initMenu (){
    menuBurger.addEventListener("click",openMenu);
    menuCloseBtn.addEventListener("click",closeMenu);
}