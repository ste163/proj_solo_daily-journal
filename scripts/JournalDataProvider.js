/*
 *   Journal data provider for Daily Journal application
 *
 *      Retrieve data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */
const eventHub = document.querySelector(".gridMain");
let journal = []

const dispatchEntryStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged");
    console.log("ENTRY STATE CHANGED");
    eventHub.dispatchEvent(entryStateChangedEvent);
}

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}

export const getJournalEntries = () => {
    return fetch("http://localhost:8088/entries")
    .then(entries => entries.json())
    .then(convertedEntries => journal = convertedEntries)
}

export const saveEntry = entryObj => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    })
    .then(getJournalEntries)
    .then(dispatchEntryStateChangeEvent)
}