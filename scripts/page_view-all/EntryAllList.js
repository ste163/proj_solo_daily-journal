// Module Goals:
    //Display notes on DOM
import { useEntries, getEntries } from "../EntryDataProvider.js"
import { EntryAllHTML } from "./EntryAllHTML.js"

//Fetch latest entries, then invoke rendering
export const listEntryAll = () => {
    getEntries()
    .then(() => {
        const entries = useEntries()
        entryAllRenderer(entries)
    })
}

//Render entries to DOM
const entryAllRenderer = (entryArray) => {
    const domTarget = document.querySelector(".entries")
    let HTMLArray =  `${
        entryArray.map(entry => {
            return EntryAllHTML(entry);
        }).join("")
    }`
    domTarget.innerHTML = HTMLArray;
}