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
                        <option value="Delightful"> Delightful</option>
                        <option value="Infuriated"> Infuriated</option>
                        <option value="Out of Sorts"> Out of Sorts</option>
                        <option value="Untroubled"> Untroubled</option>
                    </select>
                </fieldset>

                
                    <button id="submit" > Save</button>
                    <button id= "cancel" onclick="alert('Are you sure you want to cancel?')">Cancel</button>
                


            </form>`
}