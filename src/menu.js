function menu(){
    const content = document.querySelector(`#content`);
    const para = document.createElement(`h1`);
    para.innerText = "MENU PAGE";
    content.append(para);
}

export {menu}