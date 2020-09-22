export const MoodFilterHTML = (moodArray) => {
    return `
        <fieldset class="fieldset">
            <legend>Filter Spirals by Mood</legend>
            ${
                moodArray.map(
                    (mood) => {
                        return `<input id="moodFilter--${mood.id}"class="mood__filters" type="radio" name="moodFilter" value="${mood.id}"/>
                        <label for="moodFilter--${mood.label}">${mood.label}</label>
                        `
                    }
                ).join("")
            }
        </fieldset>
    `
}