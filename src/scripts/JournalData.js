/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "happy"
    },
    {
        id: 3,
        date: "08/09/1991",
        concept: "Flexbox",
        entry: "Learned how flexbox makes your css life easier yet more complicated.",
        mood: "mad"
    },
    {
        id: 4,
        date: "07/04/1985",
        concept: "Automated",
        entry: "Made data loop through to make our lives less stressful",
        mood: "content"
    },
    {
        id: 2,
        date: "01/20/2020",
        concept: "Javascript",
        entry: "Javascript on javascript, imported and exported, then fixed all the errors and be done.",
        mood: "sad"
    }
    

]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}