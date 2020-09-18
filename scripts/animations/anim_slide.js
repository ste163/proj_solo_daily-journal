// Module goal: add click events for all buttons handling the slide for create form.

export const slideAnim = () => {
    const createBtn = document.querySelectorAll(".button__slider")
    const slider = document.querySelector(".sp-form")
    for (const btn of createBtn) {
        btn.addEventListener("click", e => {
            const isSlideOut = slider.classList.contains('slide-in');
    
            slider.setAttribute('class', isSlideOut ? 'slide-out sp-form' : 'slide-in sp-form');
        })
    }
}