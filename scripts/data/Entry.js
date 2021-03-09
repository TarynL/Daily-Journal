// define object and return html 
export const Entry = (entryObj) => {
     return `
        <section class="entry">
        
        <h4 class ="entryTopic">#${entryObj.id}   ${entryObj.concept}</h4>

        <div class ="entryDate">${entryObj.date}</div>

        <div>${entryObj.entry}</div>

        <div class ="pastMood">How I was feeling:  ${entryObj.mood}</div>
        </section>
    `
}