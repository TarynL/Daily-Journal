/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        <h3 class ="journalEntry__title">${entry.concept}</h3>
        <div>${entry.date}</div>
        <div>${entry.entry}</div>
        <div>${entry.mood}</div>
        <div>${entry.quote}</div>
        </section>
    `
}