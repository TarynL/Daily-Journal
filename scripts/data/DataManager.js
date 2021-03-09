// define and export a variable whos function is to 
// retrieve data from another source using json 

export const getJournalEntry = () => {

    return fetch("http://localhost:8088/JournalEntry")
        .then(response => response.json())
        
}

export const getEntryTopic = () => {

    return fetch("http://localhost:8088/EntryTopic")
        .then(response => response.json())
        
}

const submitElement = document.querySelector(".submit");

submitElement.addEventListener("click", (event) =>{
    console.log("Entry Submitted", event)
})

const deleteElement =document.querySelector(".delete");

deleteElement.addEventListener("click", (event) => {
    console.log("Entry Deleted", event)
})

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

