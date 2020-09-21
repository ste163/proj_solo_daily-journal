// Module goals: render new entry form and save it

import { saveEntry } from "../data-providers/EntryProvider.js"
import { getMoods, useMoods } from "../data-providers/MoodProvider.js"
import { getConcepts, useConcepts } from "../data-providers/ConceptProvider.js"

const eventHub = document.querySelector(".gridBody");
const entryDOMtarget = document.querySelector(".modal");
const modalContainer = document.querySelector(".modal__container");

// Listen for modal button clicks
eventHub.addEventListener("click", e => {
    if (e.target.id === "modalOpen") {
        modalContainer.classList.add("modal__show");
    }
    if (e.target.id === "modalClose" || e.target.id === "modalBackground") {
        modalContainer.classList.remove("modal__show");
    }
});

//When user presses save button, save entered field's data to database then reset fields
eventHub.addEventListener("click", e => {
    if (e.target.id === "new__save-btn") {
        const entryAuthor = document.querySelector(".new__author--text");
        const entryMood = document.querySelector(".new__mood--dropdown");
        const entryConcepts = document.querySelectorAll(".concept__checkbox");
        const entryTitle = document.querySelector(".new__title--text");
        const entryText = document.querySelector(".new__text--text");

        const conceptValues = getConceptValues(entryConcepts)

        const newEntry = {
            date: Date.now(),
            author: entryAuthor.value,
            moodId: parseInt(entryMood.value),
            conceptId: conceptValues,
            title: entryTitle.value,
            text: entryText.value
        }

        saveEntry(newEntry);
        renderEntryForm();
    }
})

// Invoke form rendering in main.js
export const listEntryForm = () => {
    renderEntryForm()
}

// Return only concepts' values
const getConceptValues = (ConceptsNodeList) => {
    const conceptsArray = Array.from(ConceptsNodeList)
    const filteredConcepts = conceptsArray.filter(concept => {
       return concept.checked
    })
    return filteredConcepts.map(concept => {
        return concept.value
    })
}

// Render all HTML for form
const renderEntryForm = () => {
    getMoods()
    .then(getConcepts)
    .then(() => {
        const allMoods = useMoods()
        const allConcepts = useConcepts();
        return entryDOMtarget.innerHTML = `
            <div class="modal__header">
                <button id="modalClose" class="sp-form__back-btn" type="button">&#128896</button>
                <h2 class="sp-form__h2">Create Spiral</h2>
            </div>
            <form class="new" action="">
                <fieldset class="new__item">
                    <label class="new__label new__label--small" for="s-author">Author</label>
                    <textarea class="new__field new__author--text" name="s-author" rows="1" placeholder="Who are you?"></textarea>
                </fieldset>
                <fieldset class="new__item">
                    <label class="new__label new__label--small" for="s-mood">How's your Mood?</label>
                    <select class="new__field new__mood--dropdown" id="s-mood" name="s-mood">
                        <option value="select">Select an option</option>
                        ${
                            allMoods.map((mood) => {
                                return `<option value="${mood.id}">${mood.label}</option>`
                            }).join("")
                        }
                    </select>
                </fieldset>
                <fieldset class="new__item">
                    <label class="new__label" for="s-concept" id="s-concept" name="s-concept">Concepts Covered</label>
                    <div class="concepts">
                        ${
                            allConcepts.map((concept) => {
                                return `<label class="new__field concept__checkbox-label" for="concept--${concept.id}">${concept.label}</label>
                                <input type="checkbox" class="concept__checkbox" id="concept--${concept.id}" name="${concept.label}" value="${concept.label}">`
                            }).join("")
                        }
                    </div>
                </fieldset>
                <fieldset class="new__item">
                        <label class="new__label" for="s-title" id="s-title" name="s-title">Title</label>
                        <textarea class="new__field new__title--text" name="s-title" rows="2" placeholder="Forms are great!"></textarea>
                </fieldset>
                <fieldset class="new__item">
                        <label class="new__label" for="s-text" id="s-text" name="s-text">Text</label>
                        <textarea class="new__field new__text--text" name="s-text" rows="8" placeholder="You can save all sorts of data."></textarea>
                </fieldset>
                <button type="button" id="new__save-btn" class="new__save-btn">Save Spiral</button>
            </form>
        `
    })
}