// Module goals:
    // Export entries from database
    // Save entries
const eventHub = document.querySelector(".gridMain");
let journal = []

// Inform eventHub the entries have changed
const dispatchEntryStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged");
    eventHub.dispatchEvent(entryStateChangedEvent);
}

// Return date-sorted copy of entries
export const useEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    )
    return sortedByDate
}

// Fetch entries from database
export const getEntries = () => {
    return fetch("http://localhost:8088/entries?_expand=mood")
    .then(entries => entries.json())
    .then(convertedEntries => journal = convertedEntries)
}

// Save entry to database then inform eventHub
export const saveEntry = entryObj => {
    return fetch("http://localhost:8088/entries?_expand=mood", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    })
    .then(getEntries)
    .then(dispatchEntryStateChangeEvent)
}