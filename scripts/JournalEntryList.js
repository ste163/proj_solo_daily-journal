/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".test-entries")

export const EntryListComponent = () => {
    // Use the journal entry data from the data provider component
    const entries = useJournalEntries()

    let HTMLrepresentation = ""
    for (const entry of entries) {
        //The below line means, take the array of objects
        //in JournalEntryComponent, then for each index value, add
        //that to the HTML string
        HTMLrepresentation += JournalEntryComponent(entry);
    }
        entryLog.innerHTML += `
        ${HTMLrepresentation}
    `
}