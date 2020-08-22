/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// Test Data
const journal = [
    {
        id: 1,
        dateWritten: "07/24/2025",
        author: "Sam",
        mood: "Ok",
        concept: "HTML & CSS",
        title: "First Title",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS."
    },
    {
        id: 2,
        dateWritten: "07/24/2026",
        author: "Sam",
        mood: "Great",
        concept: "CSS",
        title: "Second Title",
        entry: "CSS Grid seems cool. Gotta learn more flexbox, too."
    },
    {
        id: 3,
        dateWritten: "07/24/2027",
        author: "Sam",
        mood: "Terrible",
        concept: "JavaScript",
        title: "Third Title",
        entry: "Super hard sometimes. Sometimes it's not."
    },
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}