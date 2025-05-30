function contact(){
    const content = document.querySelector(`#content`);
    content.removeAttribute(`class`,`goAway`);
    const contact = document.createElement(`h1`);
    contact.innerText = "CONTACT US";
    content.appendChild(contact);
}

export {contact}