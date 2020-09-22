import { useEntries, getEntries } from "../data-providers/EntryProvider.js"
import { DataTotalHTML } from "./DataTotalHTML.js"
import { DataMoodHTML } from "./DataMoodHTML.js"
const eventHub = document.querySelector(".gridBody");

// After user saves new form, update the total.
eventHub.addEventListener("entryStateChanged", e => {
    getEntries()
    .then(() => {
        const entries = useEntries();
        totalRenderer(entries);
        mostMoodRenderer(entries);
    })
})

export const listDataTotal = () => {
    getEntries()
    .then(() => {
        const allEntries = useEntries();
        totalRenderer(allEntries)
        mostMoodRenderer(allEntries);
    })

}

const totalRenderer = (entryArray) => {
    let totalHTML = DataTotalHTML(entryArray);
    const domTarget = document.querySelector(".sp-total")
    domTarget.innerHTML = totalHTML;
}


const mostMoodRenderer = (entryArray) => {
    // find the most used mood, then pass than into the HTML
    const mode = findMode(entryArray)
    console.log(mode)
    let moodHTML = DataMoodHTML();
    const domTarget = document.querySelector(".sp-average")
    domTarget.innerHTML = moodHTML;
    // take the entry array, find the most used mood,
    // take that id, then display the mood's name.
}

// Pulled in a person's mode script, need to go through the selected moods
const findMode = (array) => {
    const map = new Map();
    let maxFreq = 0;
    let mode;
    

    for(const item of array) {
      let freq = map.has(item) ? map.get(item) : 0;
      freq++;
  
      if(freq > maxFreq) {
        maxFreq = freq;
        mode = item;
      }
      
      map.set(item, freq);
    }
  
    return mode;
}