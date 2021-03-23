export const PostEdit = (postObj) => {
    return `
	<div class="newPost">
	    <form action="">
            <fieldset>
                <label for="journalDate">Date</label>
                    <div class ="entryDate">${postObj.date}</div>
            </fieldset>

            <fieldset class="field">
                <label for="concepts" class="concepts">Journal Concepts</label>
                <input type="text" name="concepts" id="journalConcepts" class="text" value="${postObj.concept}">
            </fieldset>


            <fieldset class="field">
                <label for="entry">Journal Entry</label>
                <textarea name="postEntry" id="postEntry" cols="30" rows="10">${postObj.entry}</textarea>
            </fieldset>

            <fieldset class="field">
                <label class="mood" for="mood">How I was feeling: ${postObj.mood}</label>
                <br>
                <label class="mood" for="mood">How I am feeling now: </label>
                <select id="mood" name="mood">
                    <option value="Delightful"> Delightful</option>
                    <option value="Infuriated"> Infuriated</option>
                    <option value="Out of Sorts"> Out of Sorts</option>
                    <option value="Untroubled"> Untroubled</option>
                </select>
            </fieldset>


            <input type="hidden" value="${postObj.id}" name="postId">
            <input type="hidden" value="${postObj.timestamp}" name="postTime">	
            <button id="updatePost__${postObj.id}">Update</button>
            <button id="newPost__cancel">Cancel</button>



        </form>
		
		
	</div>
	`
}



