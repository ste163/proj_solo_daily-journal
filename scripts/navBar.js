// Module goals: add event listeners to grow SVG underline
const eventHub = document.querySelector(".gridBody")
const targetElement = document.querySelector(".nav__underline")

eventHub.addEventListener("mouseover", e => {
    if (e.target.id === "navLink") {
        targetElement.classList.add("nav__underline--grow")
    } 
})

eventHub.addEventListener("mouseout", e => {
    if (e.target.id === "navLink") {
        targetElement.classList.remove("nav__underline--grow")
    } 
})

// Links module to main.js
export const initiateNavBar = () => {
}