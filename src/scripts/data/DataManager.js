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
        // .then(data => {
        //     const sortedByDate = data.sort(
        //         (currentEntry, pastEntry) =>
        //         Date.parse(currentEntry.date)- Date.parse(pastEntry.date)
                
        //     })
        //     return sortedByDate;
        //     )
         .then(parsedResponse => {
            moodCollection = parsedResponse
            return parsedResponse;
     })
        .then(parsedResponse => {
            dateCollection = parsedResponse
            return parsedResponse;
        })
}        
        




        export const getEntryTopic = () => {

    return fetch("http://localhost:8088/EntryTopic")
        .then(response => response.json())
        
}

// const submitElement = document.querySelector(".submit");

// submitElement.addEventListener("click", (event) =>{
//     console.log("Entry Submitted", event)
// })

// const deleteElement =document.querySelector(".delete");

// deleteElement.addEventListener("click", (event) => {
//     console.log("Entry Deleted", event)
// })

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

