import { useEntries, getEntries } from "../EntryDataProvider.js"
import { EntryAllHTML } from "./EntryAllHTML.js"

export const listEntryAll = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
        const entries = useEntries()
        entryAllRenderer(entries)
    })
}

const entryAllRenderer = (entryArray) => {
    const domTarget = document.querySelector(".test-entries")
    let HTMLArray =  `${
        entryArray.map(entry => {
            return EntryAllHTML(entry);
        }).join("")
    }`
    domTarget.innerHTML = HTMLArray;
}