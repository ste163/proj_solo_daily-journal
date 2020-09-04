/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryHTML = (entry) => {
    return `
        <article id="entry--${entry.id}" class="TEST__Entry">
                <h2>${entry.title}</h2>
                <p>${entry.date}</p>
                <p>Written by ${entry.author}</p>
                <p>How were you feeling? ${entry.mood}</p>
                <p>Concepts covered: ${entry.concept}</p>
                <p>${entry.text}</p>
                </li><button>EDIT</button><button>DELETE</button>
        </article>
    `
}