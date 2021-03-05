// import {EntryListComponent} from "./JournalEntryList.js"

// EntryListComponent();

import { getEntryTopic, getJournalEntry} from "./data/DataManager.js"
import {EntryList} from "./data/EntryList.js"

const showEntry = () => {
    const entryElement = document.querySelector(".EntryList");
    getJournalEntry()
    .then ((allEntries) => {
        entryElement.innerHTML = EntryList(allEntries);
    })
}