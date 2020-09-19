// Module goal: generate HTML for latest entry section
export const EntryLatestHTML = (entryObj) => {
    return `
    <div class="latest-entry__decoration">
        <svg class="latest-entry__svg">
            <circle cx="1.2em" cy="1.2em" r="1.2em"/>
        </svg> 
        <h2 class="latest-entry__heading">Latest</h2>
    </div>
    <header class="latest-entry__header"> 
        <h3 class="latest-entry__title">${entryObj.title}</h3>
        <p class="latest-entry__author">${entryObj.author}</p>
        <p class="latest-entry__date"><em>${new Date(entryObj.date).toLocaleDateString("en-US")}</em></p>
        <p class="latest-entry__concept"><strong>Concepts</strong>: ${entryObj.conceptId.join(', ')}</p>
        <p class="latest-entry__mood"><strong>Mood</strong>: ${entryObj.mood.label}</p>
    </header>
    <section class="latest-entry__text">
        <p>${entryObj.text}</p>
    </section>
    `
}