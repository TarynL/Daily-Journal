export const Entry = (entryObj) =>{`
        <section class="entry">
        
        <h4 class ="entryTopic">#${journal.id}   ${journal.concept}</h4>

        <div>${journal.date}</div>

        <div>${journal.entry}</div>

        <div>How I was feeling:  ${journal.mood}</div>
        </section>
    `
}