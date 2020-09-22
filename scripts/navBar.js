// Module goals: add event listeners to grow SVG underline
const eventHub = document.querySelector(".gridBody")
const viewAllTarget = document.querySelector(".nav__underline")
const createTarget = document.querySelector(".nav__underline--button")

eventHub.addEventListener("mouseover", e => {
    if (e.target.id === "navLink") {
        viewAllTarget.classList.add("nav__underline--grow")
    }
    if (e.target.id === "modalOpen") {
        createTarget.classList.add("nav__underline--button--grow")
    }
})

eventHub.addEventListener("mouseout", e => {
    if (e.target.id === "navLink") {
        viewAllTarget.classList.remove("nav__underline--grow")
    }
    if (e.target.id === "modalOpen") {
        createTarget.classList.remove("nav__underline--button--grow")
    } 
})

// Links module to main.js
export const initiateNavBar = () => {
}