const iconMenuHamburger = document.getElementById("icon-menu-hamburger");
console.log(iconMenuHamburger);

const iconMenuClose = document.getElementById("icon-menu-close");

const navLinksHamburger = document.querySelector(".nav-links-hamburger");

iconMenuHamburger.addEventListener( "click", () => {
    showElement();
})

iconMenuClose.addEventListener("click", () => {
    showElement();
})

const showElement = () =>{
    iconMenuClose.classList.toggle("hidden");
    navLinksHamburger.classList.toggle("hidden");
    iconMenuHamburger.classList.toggle("hidden");
}

