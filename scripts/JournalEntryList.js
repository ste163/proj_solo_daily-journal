import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

export const EntryListComponent = () => {
    const domTarget = document.querySelector(".test-entries")
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()
    const renderedEntries = entryRenderer(entries)
    domTarget.innerHTML += renderedEntries;
}

const entryRenderer = (entryArray) => {
    return `${
        entryArray.map(entry => {
            return JournalEntryComponent(entry);
        }).join("")
    }`
}