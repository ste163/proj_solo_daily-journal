// Module goal: generate HTML for use on View All page
export const EntryAllHTML = (entryObj) => {
    return `
    <li class="list-entry__container" id="list-entry__id--${entryObj.id}">
        <header class="list-entry__header"> 
            <h3 class="list-entry__title">${entryObj.title}</h3>
            <p class="header__item list-entry__author">${entryObj.author}</p>
            <p class="header__item list-entry__date"><em>${new Date(entryObj.date).toLocaleDateString("en-US")}</em></p>
            <p class="header__item list-entry__concept"><strong>Concepts</strong>: ${entryObj.concept}</p>
            <p class="header__item list-entry__mood"><strong>Mood</strong>: ${entryObj.mood.label}</p>
        </header>
        <section class="list-entry__text">
            <p>${entryObj.text}</p>
        </section>
        <div class="list-entry__flex-btn">
            <button type="button" id="editEntry--${entryObj.id}" class="list-entry__btn list-entry__btn--edit">Edit</button>
            <button type="button" id="deleteEntry--${entryObj.id}" class="list-entry__btn list-entry__btn--delete">Delete</button>
        </div>
    </li>
    `
}
