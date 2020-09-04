
const slider = document.querySelector(".sp-form")
const createBtn = document.querySelector(".button__new")

export const slideAnim = () => {
    createBtn.addEventListener("click", e => {
        const isSlideOut = slider.classList.contains('slide-in');

        slider.setAttribute('class', isSlideOut ? 'slide-out sp-form' : 'slide-in sp-form');
    })
}