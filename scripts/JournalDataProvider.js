/*
 *   Journal data provider for Daily Journal application
 *
 *      Retrieve data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

let journal = []

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