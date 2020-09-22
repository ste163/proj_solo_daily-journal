import { MoodFilterHTML } from "./FilterMoodHTML.js"
import { getMoods, useMoods } from "../data-providers/MoodProvider.js"
import { useEntries } from "../data-providers/EntryProvider.js"

const eventHub = document.querySelector(".gridBody")
const contentTarget = document.querySelector(".filters")

eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("moodFilter--")) {
        const [prefix, moodId] = e.target.id.split("--")
        const selectedMood = parseInt(moodId);
        const moods = filterBySelectedMood(selectedMood)
        const filterMood = new CustomEvent("FilterByMood", {
            detail: {
                filteredMoods: moods
            }
        })
        eventHub.dispatchEvent(filterMood);
}})

export const FilterBar = () => {
    getMoods()
    .then(() => {
        const moods = useMoods();
        filterRenderer(moods);
    })
}

const filterRenderer = (moodArray) => {
    contentTarget.innerHTML = `${MoodFilterHTML(moodArray)}`
}

const filterBySelectedMood = (selectedMood) => {
    const entries = useEntries()
    const filteredEntries = entries.filter(entry => {
        return entry.moodId === selectedMood;
    })
    return filteredEntries;
}