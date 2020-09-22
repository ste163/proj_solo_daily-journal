// Module goals:
    // Render an editing form
    // Listen for when user clicks save button on form
    // Save the new values
import { getSelectedEntry, editEntry } from "../data-providers/EntryProvider.js"

const eventHub = document.querySelector(".gridBody")

// Listen for user press save button, take entered values, then update database
eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("saveEdit--")) {
        const [prefix, id] = e.target.id.split("--")

        const editedEntry = {
            id: parseInt(document.querySelector("#edit--entryId").value),
            moodId: parseInt(document.querySelector("#edit--entryMoodId").value),
            date: parseInt(document.querySelector("#edit--entryDate").value),
            author: document.querySelector(`#input-author--${id}`).value,
            title: document.querySelector(`#input-title--${id}`).value,
            text: document.querySelector(`#input-text--${id}`).value,
        }
        editEntry(editedEntry, parseInt(id))
    }
})

// Generate edit form for selected entry
export const EditEntryForm = (entryId) => {
    getSelectedEntry(entryId)
        .then((response) => {
            document.querySelector(`#list-entry__id--${entryId}`).children[1].innerHTML = `
                <li class="list-entry__container" id="list-entry__id--${entryId}">
                <header class="list-entry__header"> 
                    <input type="hidden" value="${response.id}" id="edit--entryId">
                    <input type="hidden" value="${response.moodId}" id="edit--entryMoodId">
                    <input type="hidden" value="${response.date}" id="edit--entryDate">
                </header>
                <section class="list-entry__text">
                    <textarea id="input-text--${entryId}">${response.text}</textarea>
                </section>
                <button id="saveEdit--${entryId}" type="button">Save Edit</button>
                </li>
            `
            document.querySelector(`#list-entry__id--${entryId}`).querySelector(".list-entry__title").innerHTML = `
                <input id="input-title--${entryId}" value="${response.title}">
            `
            document.querySelector(`#list-entry__id--${entryId}`).querySelector(".list-entry__author").innerHTML = `
                <input id="input-author--${entryId}" value="${response.author}">
            `
        })
}

