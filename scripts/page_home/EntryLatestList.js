import {useEntries, getEntries } from "../EntryDataProvider.js"
import { EntryLatestHTML } from "./EntryLatestHTML.js"
const eventHub = document.querySelector(".gridMain");

eventHub.addEventListener("entryStateChanged", e => {
    EntryLatest();
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
    const latestEntry = entryArray[entryArray.length - 1];
    let HTMLItem = EntryLatestHTML(latestEntry)
    domTarget.innerHTML = HTMLItem;
}
