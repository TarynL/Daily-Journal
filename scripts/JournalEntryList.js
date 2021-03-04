/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getJournalEntries } from "./JournalData.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector("#entryLog")
let entryRep ="";

export const EntryListComponent = () => {
    // Use the journal entry data from the data module component
    const entries = getJournalEntries()

    for (const entry of entries) {
        entryRep += JournalEntryComponent(entry);
        console.log("entryRep", entryRep);

        /*
            Invoke the component that returns an
            HTML representation of a single entry
        */
        entryLog.innerHTML += entryRep;
    }
}