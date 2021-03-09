// import {EntryListComponent} from "./JournalEntryList.js"

// EntryListComponent();

import { getEntryTopic, getJournalEntry} from "./data/DataManager.js"
import {EntryList} from "./data/EntryList.js"

// reference where on the dom this will display 
// then get all entries to display 
const showEntryList = () => {
    const entryElement = document.querySelector(".EntryList");
    getJournalEntry().then ((allEntries) => {
        entryElement.innerHTML = EntryList(allEntries);
    })
}




// define function and invoke 
const startDailyJournal = () => {
    showEntryList();
}

// invoke function 
startDailyJournal();