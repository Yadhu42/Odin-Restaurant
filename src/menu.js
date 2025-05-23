function menu(){
    const content = document.querySelector(`#content`);

    const menuDiv = document.createElement(`div`);
    menuDiv.setAttribute(`id`,`menuDiv`);

    const para = document.createElement(`h1`);
    para.innerText = "MENU PAGE";
    menuDiv.appendChild(para);

    content.append(menuDiv);
}

export {menu}