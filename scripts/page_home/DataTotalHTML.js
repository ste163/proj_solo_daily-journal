export const DataTotalHTML = (entryArray) => {
    return `
    <div class="sp-data__decoration">
        <svg class="sp-data__svg">
            <circle cx="1.2em" cy="1.2em" r="1.2em"/>
        </svg>
        <h2 class="sp-data__heading">Data</h2>
    </div>
    <aside class="sp-total">
        <p class="sp-total__amount">${entryArray.length}</p>
        <p class="sp-total__text">Total Spirals Created</p>
    </aside>
    <aside class="sp-average">
        <p class="sp-average__amount">X</p>
        <p class="sp-average__text">is the most used mood.</p>
    </aside>
    `
}