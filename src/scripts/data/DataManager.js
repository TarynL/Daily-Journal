// define and export a variable whos function is to 
// retrieve data from another source using json 

let moodCollection = [];


export const useMoodCollection = () =>{
    return [...moodCollection];
}

let dateCollection =[];
        
export const useDateCollection = () => {
    return [...dateCollection];
}


export const getJournalEntry = () => {

    return fetch("http://localhost:8088/JournalEntry")
        .then(response => response.json())
        .then(parsedResponse => {
            dateCollection = parsedResponse
            return parsedResponse;
        })
        
}  
    
// sort by mood   
export const getJournalMood = () =>{
    return fetch("http://localhost:8088/JournalEntry")
    .then(response => response.json())
  .then(parsedResponse => {
    moodCollection = parsedResponse
    return parsedResponse;
})
}   


export const createPost = postObj => {
    return fetch("http://localhost:8088/JournalEntry", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    })
        .then(response => response.json())
  }     


    export const getEntryTopic = () => {

    return fetch("http://localhost:8088/EntryTopic")
        .then(response => response.json())
        
}

export const deletePost = JournalEntryId => {
    return fetch(`http://localhost:8088/JournalEntry/${JournalEntryId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
  
    })
        .then(response => response.json())
        .then(getJournalEntry)
  }


// retrieve a single post 
  export const getSinglePost = (JournalEntryId) => {
    return fetch(`http://localhost:8088/JournalEntry/${JournalEntryId}`)
      .then(response => response.json())
  }

//   update a post in the database. Do not create a new item just replace the data 
export const updatePost = entryObj => {
    return fetch(`http://localhost:8088/JournalEntry/${entryObj.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
  
    })
        .then(response => response.json())
        .then(getJournalEntry)
  }






// const submitElement = document.querySelector(".submit");

// submitElement.addEventListener("click", (event) =>{
//     console.log("Entry Submitted", event)
// })

// const deleteElement =document.querySelector(".delete");

// deleteElement.addEventListener("click", (event) => {
//     console.log("Entry Deleted", event)
// })



const loggedInUser = {
	id: 1,
	name: "Taryn",
	email: "taryn@coolchick.com"
}

export const getLoggedInUser = () => {
	return {...loggedInUser};
}


// const defaultEntry = {
//     id: 1,
//     date: "03/05/2021",
//     concept: "GitHub",
//     entry: "Learned how to add & commit to then push repo up.",
//     mood: "happy"
// }

// export const getJournalEntry = () => {
//     return defaultEntry;
// }

