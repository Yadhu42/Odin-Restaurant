function menu(){
    const content = document.querySelector(`#content`);
    content.removeAttribute(`class`,`goAway`);
    const overlay = document.createElement(`div`);
    overlay.setAttribute(`class`,`darkOver`);
    content.appendChild(overlay);

    const menuDiv = document.createElement(`div`);
    menuDiv.setAttribute(`id`,`menuDiv`);

    const para = document.createElement(`h1`);
    para.innerText = "MENU PAGE";
    menuDiv.appendChild(para);

    content.appendChild(menuDiv);
}

export {menu}