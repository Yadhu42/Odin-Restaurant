import { menu } from "./menu.js"
import { contact } from "./contact.js";

console.log(`Running successfully`);

const content = document.querySelector(`#content`);
const homeBtn = document.querySelector(`#landing`);
const menuBtn = document.querySelector(`#menuCard`);
const contactBtn = document.querySelector(`#contactCard`);

menuBtn.addEventListener("click",() =>{
    content.innerHTML="";
    menu();
});
