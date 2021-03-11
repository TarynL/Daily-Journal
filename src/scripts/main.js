// import {EntryListComponent} from "./JournalEntryList.js"

// EntryListComponent();

import { getEntryTopic, getJournalEntry, useMoodCollection, useDateCollection} from "./data/DataManager.js"
import {EntryList} from "./data/EntryList.js"
import { moodSelect, dateSelect} from "./data/Entry.js"



// reference where on the dom this will display 
// then get all entries to display 
const showEntryList = () => {
    const entryElement = document.querySelector(".EntryList");
    getJournalEntry().then ((allEntries) => {
        entryElement.innerHTML = EntryList(allEntries);
    });
}

const applicationElement = document.querySelector(".pastEntries");

const showMoodSelect = () => {
    const moodElement = document.querySelector(".moodFilter");
    moodElement.innerHTML = moodSelect();
}

const showDateSelect = () => {
    const dateElement = document.querySelector(".dateFilter");
    dateElement.innerHTML = dateSelect();
}







// define function and invoke 
const startDailyJournal = () => {
    showEntryList();
    showMoodSelect();
    showDateSelect();
   
}

// invoke function 
startDailyJournal();





// applicationElement.addEventListener ("change", event =>{
//     if(event.target.id === "moodSelection"){
//         showFilteredMood();

//     }
// })
// // get a copy and filter data 
// const showFilteredMood = () => {

//     const filteredMood = useMoodCollection().filter(singleMood =>{
//         if(singleMood.mood === ) {
//             return singleMood
//         }
//     })
// }
applicationElement.addEventListener("change", event => {
    if (event.target.id === "dateSelection") {
      const yearAsNumber = parseInt(event.target.value)
  
      console.log(`User wants to see entries from ${yearAsNumber}`)
      showFilteredDate(yearAsNumber);
    }
  })

  const showFilteredDate = (year) => {
    const epoch = Date.parse(`01/01/${year}`);
    const filteredDate = useDateCollection().filter(singlePost => {
      if (singlePost.date >= epoch) {
        return singlePost
      }
    })

    const dateElement = document.querySelector(".dateFilter");
    dateElement.innerHTML = EntryList(filteredDate);
}
   
 
 



const submitElement = document.querySelector(".submit");

submitElement.addEventListener("click", (event) =>{
    console.log("Entry Submitted", event)
})

const deleteElement =document.querySelector(".delete");

deleteElement.addEventListener("click", (event) => {
    console.log("Entry Deleted", event)
})