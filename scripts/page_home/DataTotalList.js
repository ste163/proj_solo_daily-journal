import {useEntries, getEntries } from "../data-providers/EntryProvider.js"
import { DataTotalHTML } from "./DataTotalHTML.js"
const eventHub = document.querySelector(".gridMain");

// After user saves new form, update the total.
eventHub.addEventListener("entryStateChanged", e => {
    getEntries()
    .then(() => {
        const entries = useEntries();
        totalRenderer(entries);
    })
})

export const listDataTotal = () => {
    getEntries()
    .then(() => {
        totalRenderer(useEntries());
    })

}

const totalRenderer = (entryArray) => {
    const domTarget = document.querySelector(".sp-data")
    let totalHTML = DataTotalHTML(entryArray);
    domTarget.innerHTML = totalHTML;
}