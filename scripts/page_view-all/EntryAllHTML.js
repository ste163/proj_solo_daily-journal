// Generate HTML for use on the View All page
export const EntryAllHTML = (entryObj) => {
    return `
    <li id="entry__id--${entryObj.id}">
        <header class="entry__header"> 
            <h2 class="entry__title">${entryObj.title}</h3>
            <p class="entry__date"><em>${entryObj.date}</em></p>
            <p class="entry__author">${entryObj.author}</p>
            <p class="entry__concept"><strong>Concepts</strong>: ${entryObj.concept}</p>
            <p class="entry__mood"><strong>Mood</strong>: ${entryObj.mood}</p>
        </header>
        <section class="entry__text">
            <p>${entryObj.text}</p>
        </section>
        <button class="entry__btn-edit">Edit</button><button class="entry__btn-delete">Delete</button>
    </li>
    `
}
