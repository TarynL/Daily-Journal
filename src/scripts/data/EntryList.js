import { Entry } from "./Entry.js";


export const EntryList = (allEntries) => {
    let entryHTML = "";

// for of loop over the array of all entries then invoke entry 
    for (const entryObj of allEntries) {
        entryHTML += Entry(entryObj)
    }
    // return html representation 
 
    return entryHTML;
}

