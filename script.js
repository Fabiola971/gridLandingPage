const iconMenuHamburger = document.getElementById("icon-menu-hamburger");
console.log(iconMenuHamburger);
const iconMenuClose = document.getElementById("icon-menu-close");
const navLinksHamburger = document.querySelector(".nav-links-hamburger");

const gridContainer = document.getElementById("grid-container");
const color1 = " hsl(228, 99%, 58%)";
const color2 = " hsl(228, 100%, 60%)";

iconMenuHamburger.addEventListener( "click", () => {
    showElement();
    changeColor(gridContainer, color1);
})

iconMenuClose.addEventListener("click", () => {
    showElement();
    changeColor(gridContainer, color2)
})

const showElement = () =>{
    iconMenuClose.classList.toggle("hidden");
    navLinksHamburger.classList.toggle("hidden");
    iconMenuHamburger.classList.toggle("hidden");
}

const changeColor = (section, color) => {
    section.style.backgroundColor = color;
}