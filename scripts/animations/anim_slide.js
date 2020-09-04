//Slide animation requires the renderForm to be passed in.
//It's the only way to have the form back button generate
//Before the slide animator sets up.

export const slideAnim = (renderForm) => {
    renderForm();
    const createBtn = document.querySelectorAll(".button__slider")
    const slider = document.querySelector(".sp-form")
    for (const btn of createBtn) {
        btn.addEventListener("click", e => {
            const isSlideOut = slider.classList.contains('slide-in');
    
            slider.setAttribute('class', isSlideOut ? 'slide-out sp-form' : 'slide-in sp-form');
        })
    }
  
}