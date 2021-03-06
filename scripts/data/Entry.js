// define object and return html 
export const Entry = (entryObj) => {
     return `
        <section class="entry">
        
        <h4 class ="entryTopic">#${entryObj.id}   ${entryObj.concept}</h4>

        <div>${entryObj.date}</div>

        <div>${entryObj.entry}</div>

        <div>How I was feeling:  ${entryObj.mood}</div>
        </section>
    `
}