// Module goals:
    // Export entries from database
    // Save entries
const eventHub = document.querySelector(".gridBody");
let journal = []

// Inform eventHub the entries have changed
const dispatchEntryStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entryStateChangedEvent)
}

// Return date-sorted copy of entries
export const useEntries = () => {
    const sortedByDate = journal.reverse()
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

// Delete entry from database then inform eventHub
export const deleteEntry = entryId => {
    return fetch(`http://localhost:8088/entries/${entryId}`, {
        method: "DELETE"
    })
    .then(getEntries)
    .then(dispatchEntryStateChangeEvent)
}

// Retrieve selected entry in database before editing
export const getSelectedEntry = (entryId) => {
    return fetch(`http://localhost:8088/entries/${entryId}`)
        .then(response => response.json());
}

// Edit entry in database
export const editEntry = (editedEntryObj, entryId) => {
    return fetch(`http://localhost:8088/entries/${entryId}?_expand=mood`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedEntryObj)
    })
    .then(getEntries)
    .then(dispatchEntryStateChangeEvent)
}