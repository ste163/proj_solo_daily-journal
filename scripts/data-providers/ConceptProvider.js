// Module goals:
    // Export concepts from database

let concepts = []

// Return copy of concepts
export const useConcepts = () => concepts.slice()

// Fetch concepts from database
export const getConcepts = () => {
    return fetch("http://localhost:8088/concepts")
    .then(concepts => concepts.json())
    .then(convertedConcepts => concepts = convertedConcepts)
}