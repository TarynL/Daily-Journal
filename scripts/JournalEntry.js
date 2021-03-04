/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (journal) => {
    return `
        <section class="entryNumber">
        <div> ${journal.id}</div>
        <h4 class ="entryTopic">${journal.concept}</h4>
        <div>${journal.date}</div>
        <div>${journal.entry}</div>
        <div>${journal.mood}</div>
        <div>${journal.quote}</div>
        </section>
    `
}