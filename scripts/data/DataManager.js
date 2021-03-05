export const getJournalEntries = () => {

    return fetch("http://localhost:8088/journalEntry")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}