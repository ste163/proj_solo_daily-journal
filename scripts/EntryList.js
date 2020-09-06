import { useEntries, getEntries } from "./EntryDataProvider.js"
import { EntryHTML } from "./EntryHTML.js"

export const EntryList = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(() => {
        const entries = useEntries()
        entryRenderer(entries)
    })
}

const entryRenderer = (entryArray) => {
    const domTarget = document.querySelector(".test-entries")
    let HTMLarray =  `${
        entryArray.map(entry => {
            return EntryHTML(entry);
        }).join("")
    }`
    domTarget.innerHTML = HTMLarray;
}