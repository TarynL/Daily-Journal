import { Entry } from "./Entry.js";

export const EntryList = (allEntries) => {
    let entryHTML = "";

    for (const entryObj of allEntries) {
        entryHTML += Entry(entryObj)
    }
    return entryHTML;
}

