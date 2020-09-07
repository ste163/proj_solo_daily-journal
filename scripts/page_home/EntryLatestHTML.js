export const EntryLatestHTML = (entryObj) => {
    return `
    <h2 class="latest-entry__heading">Latest</h2>
    <header class="latest-entry__header"> 
        <h3 class="latest-entry__title">${entryObj.title}</h3>
        <p class="latest-entry__author">${entryObj.author}</p>
        <p class="latest-entry__date"><em>${entryObj.date}</em></p>
        <p class="latest-entry__concept"><strong>Concepts</strong>: ${entryObj.concept}</p>
        <p class="latest-entry__mood"><strong>Mood</strong>: ${entryObj.mood}</p>
    </header>
    <section class="latest-entry__text">
        <p>${entryObj.text}</p>
    </section>
    `
}