// export const PostEntry = () => {
//     return `
//     <div class="newEntry">
//         <div>
//             <input value=""
//                    name="postTitle"
//                    class="newPost__input"
//                    type="text"
//                    placeholder="Title" />
//         </div>
//         <div>
//             <input value=""
//                    name="postURL"
//                    class="newPost__input"
//                    type="text"
//                    placeholder="URL of gif" />
//         </div>

//         <textarea name="postDescription"
//             class="newPost__input newPost__description"
//             placeholder="Story behind your gif..."></textarea>

//         <button id="newPost__submit">Save</button>
//         <button id="newPost__cancel">Cancel</button>
//     </div>
//     `
// }

export const PostEntry = () => {
    return   `

            <form action="">
                <fieldset>
                    <label for="journalDate">Date</label>
                    <input type="date" name="journalDate" id="journalDate">
                </fieldset>

                <fieldset class="field">
                    <label for="concepts" class="concepts">Journal Concepts</label>
                    <input type="text" name="concepts" id="journalConcepts" class="text">
                </fieldset>


                <fieldset class="field">
                    <label for="entry">Journal Entry</label>
                    <textarea name="postEntry" id="postEntry" cols="30" rows="10"></textarea>
                </fieldset>

                <fieldset class="field">
                    <label class="mood" for="mood">How are you feeling:</label>
                    <select id="mood" name="mood">
                        <option value="happy">Delightful</option>
                        <option value="mad">Infuriated</option>
                        <option value="sad">Out of Sorts</option>
                        <option value="content">Untroubled</option>
                    </select>
                </fieldset>

                
                    <button id="submit" > Save</button>
                    <button id= "cancel" onclick="alert('Are you sure you want to cancel?')">Cancel</button>
                


            </form>`
}