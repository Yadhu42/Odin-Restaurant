import "../public/styles/style.css";
import { menu } from "./menu.js"
import { contact } from "./contact.js";

console.log(`Running successfully`);

const content = document.querySelector(`#content`);
const homeBtn = document.querySelector(`#landing`);
const menuBtn = document.querySelector(`#menuCard`);
const contactBtn = document.querySelector(`#contactCard`);


function landingPage(){
    const contentBox = document.createElement(`div`);
    content.removeAttribute(`class`,`goAway`);
    const overlay = document.createElement(`div`);
    overlay.setAttribute(`class`,`darkOver`);
    content.appendChild(overlay);
    contentBox.setAttribute("id","contentBox");

    const bgBox = document.createElement(`div`);
    bgBox.setAttribute("id","bgBox");

    const hero = document.createElement(`div`);
    hero.setAttribute(`class`,`hero`);

    hero.innerHTML = `
            <p class="typeUp big">Bywater’s Pride & the Shire’s Heartiest Hearth!</p>
            <p class="typeUp">Come wet your whistle where good cheer never runs dry! Nestled just ‘round the bend from Hobbiton</p>
            <p class="typeUp">Don’t miss our <span> Harvest Ale Festival</span> this coming Afterlithe – <span> free pipeweed pouch with every third pint! </span></p>
            <p class="typeUp">-“There's no place like the Green Dragon for a tale, a tune, and a tankard.”</p>`

    bgBox.appendChild(hero);

    const txtBox = document.createElement(`div`);
    txtBox.setAttribute("id","txtBox");

    contentBox.appendChild(bgBox);
    contentBox.appendChild(txtBox);

    content.append(contentBox);

    const slogan = document.createElement(`div`);
    const carrousel = document.createElement(`div`);
    carrousel.setAttribute("id","hobbits");

    slogan.setAttribute("id","slogan");
    txtBox.appendChild(slogan);
    txtBox.appendChild(carrousel);

    slogan.innerHTML=`
    <div id="sloganTxt">
        <span id="text1"></span>
        <span id="text2"></span>
    </div>

    <svg id="filters">
        <defs>
            <filter id="threshold">
                <feColorMatrix in="SourceGraphic" type="matrix" values="
                                        1 0 0 0 0
                                        0 1 0 0 0
                                        0 0 1 0 0
                                        0 0 0 255 -140" />
            </filter>
        </defs>
    </svg>`

    carrousel.innerHTML = `
    <ul class="scrollList">
        <li><img class="carImg" src="../images/carr2.jpg"></li>
        <li><img class="carImg" src="../images/carr7.jpg"></li>
        <li><img class="carImg" src="../images/carr8.jpg"></li>
        <li><img class="carImg" src="../images/carr6.jpg"></li>
        <li><img class="carImg" src="../images/carr4.jpg"></li>
    </ul>`

    const elts = {
        text1: document.getElementById("text1"),
        text2: document.getElementById("text2")
    };

    const texts = [
        "You can drink your fancy ales",
        "and drink them by the flagon",
        "but the only brew ",
        "for the brave and true",
        "comes from the Green Dragon!",
    ];

    const morphTime = 1;
    const cooldownTime = 0.95;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    function doMorph() {
        morph -= cooldown;
        cooldown = 0;

        let fraction = morph / morphTime;

        if (fraction > 1) {
            cooldown = cooldownTime;
            fraction = 1;
        }

        setMorph(fraction);
    }

    function setMorph(fraction) {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    function doCooldown() {
        morph = 0;

        elts.text2.style.filter = "";
        elts.text2.style.opacity = "100%";

        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
    }

    function animate() {
        requestAnimationFrame(animate);

        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
            if (shouldIncrementIndex) {
                textIndex++;
            }

            doMorph();
        } else {
            doCooldown();
        }
    }

    animate();
}

landingPage();

homeBtn.addEventListener("click",() =>{
    content.setAttribute(`class`,`goAway`);
    content.innerHTML="";
    
    setTimeout(() => {
       landingPage();
    }, 200);
});

menuBtn.addEventListener("click",() =>{
    content.setAttribute(`class`,`goAway`);
    content.innerHTML="";
    
    setTimeout(() => {
        menu();
    }, 200);
});

contactBtn.addEventListener("click",() =>{
    content.setAttribute(`class`,`goAway`);
    content.innerHTML="";
    
    setTimeout(() => {
        contact();
    }, 200);

});