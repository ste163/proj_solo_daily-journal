import {useEntries, getEntries } from "../data-providers/EntryProvider.js"
import { EntryLatestHTML } from "./EntryLatestHTML.js"
const eventHub = document.querySelector(".gridBody");

eventHub.addEventListener("entryStateChanged", e => {
    listEntryLatest();
})

export const listEntryLatest = () => {
    getEntries()
    .then(() => {
        latestRenderer(useEntries());
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
