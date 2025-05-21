function contact(){
    const content = document.querySelector(`#content`);
    const contact = document.createElement(`h1`);
    contact.innerText = "CONTACT US";
    content.appendChild(contact);
}

export {contact}