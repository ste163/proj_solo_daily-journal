// Module Goals:
    //Display notes on DOM
import { useEntries, getEntries, deleteEntry } from "../data-providers/EntryProvider.js"
import { EntryAllHTML } from "./EntryAllHTML.js"

const eventHub = document.querySelector(".gridMain")

// When entries update, update display
eventHub.addEventListener("entryStateChanged", e => listEntryAll())

// Delete entries when delete button pressed
eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("deleteEntry--")) {
        const [prefix, id] = e.target.id.split("--")
        deleteEntry(id);
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