const entryDOMtarget = document.querySelector(".sp-form");

export const renderEntryForm = () => {
    entryDOMtarget.innerHTML = `
    <form class="new" action="">
        <div class="new__two-col">
            <fieldset>
                <label class="new__label new__label--small" for="s-date">Date Written</label>
                <input class="new__date--input" type="date" id="s-date" name="s-date">
            </fieldset>
            <fieldset class="new__center">
                <label class="new__label new__label--small" for="s-mood">How's your Mood?</label>
                <select class="new__mood--dropdown" id="s-mood" name="s-mood">
                    <option value="mood1">mood1</option>
                    <option value="mood2">mood2</option>
                    <option value="mood3">mood3</option>
                </select>
            </fieldset>
        </div>
        <fieldset class="new__center">
            <label class="new__label" for="s-concept" id="s-concept" name="s-concept">Concepts Covered</label>
            <textarea class="new__concept--text" name="s-concept" rows="1"></textarea>
        </fieldset>
        <fieldset class="new__center">
                <label class="new__label" for="s-title" id="s-title" name="s-title">Title</label>
                <textarea class="new__title--text" name="s-title" rows="1"></textarea>
        </fieldset>
        <fieldset class="new__center">
                <label class="new__label" for="s-text" id="s-text" name="s-text">Text</label>
                <textarea class="new__text--text" name="s-text" rows="8" placeholder="How did today go?"></textarea>
        </fieldset>
        <input type="submit" value="Save Spiral">
    </form>
    `
}