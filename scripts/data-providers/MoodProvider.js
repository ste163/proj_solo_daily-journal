// Module goals:
    // Export moods from database

let moods = []

// Return copy of moods
export const useMoods = () => moods.slice()

// Fetch moods from database
export const getMoods = () => {
    return fetch("http://localhost:8088/moods")
    .then(moods => moods.json())
    .then(convertedMoods => moods = convertedMoods)
}