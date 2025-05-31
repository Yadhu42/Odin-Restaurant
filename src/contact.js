function contact(){
    const content = document.querySelector(`#content`);
    content.removeAttribute(`class`,`goAway`);
    const contact = document.createElement(`div`);
    contact.setAttribute(`class`,`contact`);
    contact.innerHTML = `
            <div class="name">
                <label class="label" for="name">Name</label>
                <input class="userName" type="text" name="name">
            </div>           
            
            <div class="comment">
                <label class="label" for="story">Tell us your query:</label>

                <textarea class="suggest" rows="5" cols="33">
                </textarea>
            </div>
            
            <div class="submit"><button class="navButton">Submit</button></div>
            
            `

    content.appendChild(contact);
}

export {contact}