import { useJournalEntries, getJournalEntries } from "../JournalDataProvider.js"
import { JournalEntryHTML } from "./JournalEntry.js"

export const EntryList = () => {
    // Use the journal entry data from the data provider component
    getJournalEntries()
    .then(() => {
        const entries = useJournalEntries()
        entryRenderer(entries)
    })
}

const entryRenderer = (entryArray) => {
    const domTarget = document.querySelector(".test-entries")
    let HTMLarray =  `${
        entryArray.map(entry => {
            return JournalEntryHTML(entry);
        }).join("")
    }`
    domTarget.innerHTML = HTMLarray;
}