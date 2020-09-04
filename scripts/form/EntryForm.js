const entryDOMtarget = document.querySelector(".sp-form");

export const renderEntryForm = () => {
    entryDOMtarget.innerHTML = `
    <h2 class="sp-form__h2">Create a new Spiral</h2>
    <form class="new" action="">
            <fieldset class="new__center">
                <label class="new__label new__label--small" for="s-date">Date Written</label>
                <input class="new__date--input" type="date" id="s-date" name="s-date">
            </fieldset>
            <fieldset class="new__center">
                <label class="new__label new__label--small" for="s-mood">How's your Mood?</label>
                <select class="new__mood--dropdown" id="s-mood" name="s-mood">
                    <option value="fantastic">Fantastic</option>
                    <option value="groovy">Groovy</option>
                    <option value="funky">Funky</option>
                    <option value="confused">Confused</option>
                    <option value="annoyed">Annoyed</option>
                    <option value="don't-ask">Don't Ask</option>
                </select>
            </fieldset>
        <fieldset class="new__center">
            <label class="new__label" for="s-concept" id="s-concept" name="s-concept">Concepts Covered</label>
            <textarea class="new__concept--text" name="s-concept" rows="2" placeholder="JavaScript, HTML, CSS, APIs"></textarea>
        </fieldset>
        <fieldset class="new__center">
                <label class="new__label" for="s-title" id="s-title" name="s-title">Title</label>
                <textarea class="new__title--text" name="s-title" rows="2" placeholder="Forms are great!"></textarea>
        </fieldset>
        <fieldset class="new__center">
                <label class="new__label" for="s-text" id="s-text" name="s-text">Text</label>
                <textarea class="new__text--text" name="s-text" rows="8" placeholder="You can save all sorts of data."></textarea>
        </fieldset>
        <input class="new__save-btn" type="submit" value="Save Spiral">
    </form>
    `
}