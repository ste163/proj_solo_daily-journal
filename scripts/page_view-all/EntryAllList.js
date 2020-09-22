// Module goals:
    //Display notes on DOM
import { useEntries, getEntries, deleteEntry } from "../data-providers/EntryProvider.js"
import { EntryAllHTML } from "./EntryAllHTML.js"

const eventHub = document.querySelector(".gridBody")

// When entries update, update display
eventHub.addEventListener("entryStateChanged", e => listEntryAll())

// When user filters by mood, update display
eventHub.addEventListener("FilterByMood", e => entryAllRenderer(e.detail.filteredMoods))

// Delete entries when delete button pressed
eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = e.target.id.split("--")
        deleteEntry(parseInt(id));
    }
    if (e.target.id.startsWith("editEntry--")) {
        const [prefix, id] = e.target.id.split("--")
    }

})

// Initial page load: fetch latest entries, then invoke rendering
export const listEntryAll = () => {
    getEntries()
    .then(() => {
        const entries = useEntries()
        entryAllRenderer(entries)
    })
}

// Render entries to DOM
const entryAllRenderer = (entryArray) => {
    const domTarget = document.querySelector(".entries")
    let HTMLArray =  `${
        entryArray.map(entry => {
            return EntryAllHTML(entry);
        }).join("")
    }`
    domTarget.innerHTML = HTMLArray;
}