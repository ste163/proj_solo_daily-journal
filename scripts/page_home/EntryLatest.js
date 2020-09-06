import {useEntries, getEntries } from "../EntryDataProvider.js"
import { EntryLatestHTML } from "./EntryLatestHTML.js"
const eventHub = document.querySelector(".gridMain");

eventHub.addEventListener("entryStateChanged", e => {
    EntryLatest();
})

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
    console.log(entryArray);
    const latestEntry = entryArray[entryArray.length - 1];
    console.log(latestEntry);
    let HTMLItem = EntryLatestHTML(latestEntry)
    domTarget.innerHTML = HTMLItem;
}
