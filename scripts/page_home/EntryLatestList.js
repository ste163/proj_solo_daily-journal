import {useEntries, getEntries } from "../EntryDataProvider.js"
import { EntryLatestHTML } from "./EntryLatestHTML.js"
const eventHub = document.querySelector(".gridMain");

eventHub.addEventListener("entryStateChanged", e => {
    listEntryLatest();
})

export const listEntryLatest = () => {
    getEntries()
    .then(() => {
        const entries = useEntries();
        latestRenderer(entries);
    })
}

//takes the newest entry array and renders ONLY the last item
const latestRenderer = (entryArray) => {
    const domTarget = document.querySelector(".latest-entry")
    // If you want the last item of the array, do entryArray[entryArray.length - 1]
    const latestEntry = entryArray[0];
    let HTMLItem = EntryLatestHTML(latestEntry)
    domTarget.innerHTML = HTMLItem;
}
