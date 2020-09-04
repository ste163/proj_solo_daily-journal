import { saveEntry } from "../JournalDataProvider.js"

const eventHub = document.querySelector(".gridMain");
const entryDOMtarget = document.querySelector(".sp-form");

//need an event listener on the save button
eventHub.addEventListener("click", e => {
    if (e.target.id === "new__save-btn") {
        console.log("HIT SAVE BUTTON");

        const entryAuthor = document.querySelector(".new__author--text");
        const entryDate = document.querySelector(".new__date--input");
        const entryMood = document.querySelector(".new__mood--dropdown");
        const entryConcepts = document.querySelector(".new__concept--text");
        const entryTitle = document.querySelector(".new__title--text");
        const entryText = document.querySelector(".new__text--text");

        const newEntry = {
            date: entryDate.value,
            author: entryAuthor.value,
            mood: entryMood.value,
            concept: entryConcepts.value,
            title: entryTitle.value,
            text: entryText.value
        }

        saveEntry(newEntry);
        // To clear fields
        entryAuthor.value = "";
        entryDate.value = "";
        entryMood.value = "select";
        entryConcepts.value = "";
        entryTitle.value = "";
        entryText.value = "";
    }
})

export const renderEntryForm = () => {
    entryDOMtarget.innerHTML = `
    <button class="sp-form__back-btn button__slider" type="button">&#128896</button>
    <h2 class="sp-form__h2">Create a new Spiral</h2>
    <form class="new" action="">
        <fieldset class="new__center">
           <label class="new__label new__label--small" for="s-author">Author</label>
           <textarea class="new__author--text" name="s-author" rows="1" placeholder="Who are you?"></textarea>
        </fieldset>
        <fieldset class="new__center">
            <label class="new__label new__label--small" for="s-date">Date Written</label>
            <input class="new__date--input" type="date" id="s-date" name="s-date">
        </fieldset>
        <fieldset class="new__center">
            <label class="new__label new__label--small" for="s-mood">How's your Mood?</label>
            <select class="new__mood--dropdown" id="s-mood" name="s-mood">
                <option value="select">Select an option</option>
                <option value="fantastic">Fantastic</option>
                <option value="groovy">Groovy</option>
                <option value="funky">Funky</option>
                <option value="confused">Confused</option>
                <option value="annoyed">Annoyed</option>
                <option value="don't-ask">Don't Ask</option>
            </select>
        </fieldset>
        <fieldset class="new__center">
            <label class="new__label" for="s-concept" id="s-concept" name="s-concept">Concepts Covered</label>
            <textarea class="new__concept--text" name="s-concept" rows="2" placeholder="JavaScript, HTML, CSS, APIs"></textarea>
        </fieldset>
        <fieldset class="new__center">
                <label class="new__label" for="s-title" id="s-title" name="s-title">Title</label>
                <textarea class="new__title--text" name="s-title" rows="2" placeholder="Forms are great!"></textarea>
        </fieldset>
        <fieldset class="new__center">
                <label class="new__label" for="s-text" id="s-text" name="s-text">Text</label>
                <textarea class="new__text--text" name="s-text" rows="8" placeholder="You can save all sorts of data."></textarea>
        </fieldset>
        <button type="button" id="new__save-btn" class="new__save-btn">Save Spiral</button>
    </form>
    `
}