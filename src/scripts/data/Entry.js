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

export const moodSelect = () => {
    return `
        
            <section class="aside__item">
                Filter by Mood <select id="moodSelection">
                    <option>Delighful</option>
                    <option>Infuriated</option>
                    <option>Out of Sorts</option>
                    <option>Untroubled</option>
                </select>
                <span id="moodCount">0</span>
            </selection>
            
    `
}

export const dateSelect = () => {
    return `
        
            <section class="aside__item">
                Filter by Date <select id="dateSelection">
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                </select>
                <span id="dateCount">0</span>
            </selection>
            
    `
}