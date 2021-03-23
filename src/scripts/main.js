// import {EntryListComponent} from "./JournalEntryList.js"

// EntryListComponent();

import { getJournalEntry, getJournalMood, useMoodCollection, useDateCollection, getLoggedInUser, createPost, deletePost, getSinglePost, updatePost } from "./data/DataManager.js"
import { EntryList } from "./data/EntryList.js"
import { moodSelect, dateSelect } from "./data/Entry.js"
import { PostEntry } from "./data/PostEntry.js"
import {PostEdit} from "./data/PostEdit.js"

const applicationElement = document.querySelector("body");

// reference where on the dom this will display 
// then get all entries to display 
const showEntryList = () => {
  const entryElement = document.querySelector(".EntryList");
  getJournalEntry().then((allEntries) => {
    entryElement.innerHTML = EntryList(allEntries);
  });
}
const showMoodList = () => {
  const entryElement = document.querySelector(".EntryList");
  getJournalMood().then((allEntries) => {
    entryElement.innerHTML = EntryList(allEntries);
  });
}


const showMoodSelect = () => {
  const moodElement = document.querySelector(".moodFilter");
  moodElement.innerHTML = moodSelect();
}

const showDateSelect = () => {
  const dateElement = document.querySelector(".dateFilter");
  dateElement.innerHTML = dateSelect();
}
const showPostEntry = () => {
  //Get a reference to the location on the DOM where the nav will display
  const postElement = document.querySelector(".form");
  postElement.innerHTML = PostEntry();
}


// define function and invoke 
const startDailyJournal = () => {
  showEntryList();
  showPostEntry();
  showDateSelect();
  showMoodSelect();
  showMoodList();

}

// invoke function 
startDailyJournal();

applicationElement.addEventListener("click", event => {
  if (event.target.id === "cancel") {
    //clear the input fields
  }
})

applicationElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id === "submit") {

    //collect the input values into an object to post to the DB
    const conceptInputValue = document.querySelector("input[name= 'concepts']").value
    const entryInputValue = document.querySelector("textarea[name='postEntry']").value
    const moodInputValue = document.querySelector("select[name='mood']").value
    //we have not created a user yet - for now, we will hard code `1`.
    //we can add the current time as well
    const postObject = {
      timestamp: Date.now(),
      concept: conceptInputValue,
      entry: entryInputValue,
      mood: moodInputValue,
      userId: getLoggedInUser().id

    }


    // be sure to import from the DataManager
    createPost(postObject)
  }
})











  applicationElement.addEventListener("change", event => {
   
    if (event.target.id === "moodSelection") {
      const selectedMood = event.target.value
     
      showFilteredMood(selectedMood);
    }
  })
 
// get a copy and filter data 
const showFilteredMood =  (mood) => {
 
  const filteredMood = useMoodCollection().filter(singleMood => {
  if (singleMood.mood === mood) {
    return singleMood;
  }
})
const entryElement = document.querySelector("#entryLog");
entryElement.innerHTML = EntryList(filteredMood);
}



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
    if (Date.parse(singlePost.date) >= epoch) {
      return singlePost
    }
  })

  const entryElement = document.querySelector(".EntryList");

  //     const dateElement = document.querySelector(".dateFilter");
  entryElement.innerHTML = EntryList(filteredDate);
};

applicationElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id.startsWith("delete")) {
    const JournalEntryId = event.target.id.split("__")[1];
    deletePost(JournalEntryId)
      .then(response => {
        showEntryList();
      })
  }
})

applicationElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id.startsWith("edit")) {
    const JournalEntryId = event.target.id.split("__")[1];
    getSinglePost(JournalEntryId)
      .then(response => {
        showEdit(response);
      })
  }
})

const showEdit = (postObj) => {
  const entryElement = document.querySelector(".form");
  entryElement.innerHTML = PostEdit(postObj);
}  



applicationElement.addEventListener("click", event => {
  event.preventDefault();
  if (event.target.id.startsWith("updatePost")) {
    const postId = event.target.id.split("__")[1];
    //collect all the details into an object
    const conceptInputValue = document.querySelector("input[name= 'concepts']").value
    const entryInputValue = document.querySelector("textarea[name='postEntry']").value
    const moodInputValue = document.querySelector("select[name='mood']").value
    const timestamp = document.querySelector("input[name='postTime']").value
    const postObj = {
      timestamp: parseInt(timestamp),
      id: parseInt(postId),
      concept: conceptInputValue,
      entry: entryInputValue,
      mood: moodInputValue,
      userId: getLoggedInUser().id
      
      
      
    }
    showPostEntry();

    updatePost(postObj)
      .then(response => {
        showEntryList();
      })
  }
})