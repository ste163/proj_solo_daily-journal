// Generate HTML for use on the View All page
export const EntryAllHTML = (entryObj) => {
    return `
    <li id="entry__id--${entryObj.id}">
        <h2 class="entry__heading">Latest</h2>
        <header class="entry__header"> 
            <h3 class="entry__title">${entryObj.title}</h3>
            <p class="entry__date"><em>${entryObj.date}</em></p>
            <p class="entry__author">${entryObj.author}</p>
            <p class="entry__concept"><strong>Concepts</strong>: ${entryObj.concept}</p>
            <p class="entry__mood"><strong>Mood</strong>: ${entryObj.mood}</p>
        </header>
        <section class="entry__text">
            <p>${entryObj.text}</p>
        </section>
        <button>Edit</button><button>Delete</button>
    </li>
    `
}
