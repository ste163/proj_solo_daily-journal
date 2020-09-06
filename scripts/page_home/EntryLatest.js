import {useEntries, getEntries } from "../EntryDataProvider.js"
import { EntryLatestHTML } from "./EntryLatestHTML.js"

export const EntryLatest = () => {
    getEntries()
    .then(() => {
        const entries = useEntries();
        latestRenderer(entries);
    })
}

//takes the newest entry array and renders ONLY the last item
const latestRenderer = (entryArray) => {
    const domTarget = document.querySelector(".latest-entry")
    const latestEntry = entryArray[Array.length -1];
    let HTMLItem = EntryLatestHTML(latestEntry)
    domTarget.innerHTML = HTMLItem;
}
