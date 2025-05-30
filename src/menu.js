function menu(){
    const content = document.querySelector(`#content`);
    content.removeAttribute(`class`,`goAway`);
    const overlay = document.createElement(`div`);
    overlay.setAttribute(`class`,`darkOver`);
    content.appendChild(overlay);

    const menuDiv = document.createElement(`div`);
    menuDiv.setAttribute(`id`,`menuDiv`);

    const textBox = document.createElement(`div`);
    textBox.setAttribute(`class`,`menuCardTxt`);

    const meal1 = document.createElement(`div`);
    meal1.setAttribute(`class`,`meal`);
    meal1.innerHTML=`
            <p class="mealTitle">Breakfast</p>
            <p class="mealPairing">paired with meats, jams, and coffee or tea</p>
            <ul class="mealList">
                <li class="mealItem">Hobbit hash</li>
                <li class="mealItem">Ham omelet made with curry spices, onions, and tomatoes</li>
            </ul>`
    const meal2 = document.createElement(`div`);
    meal2.setAttribute(`class`,`meal`);
    meal2.innerHTML=`
            <p class="mealTitle">Second Breakfast</p>
            <p class="mealPairing">paired with pastries, fruits and coffee or tea</p>
            <ul class="mealList">
                <li class="mealItem">Strawberry French toast with a side of sausage</li>
                <li class="mealItem">Scones and clotted cream</li>
            </ul>`
    const meal3 = document.createElement(`div`);
    meal3.setAttribute(`class`,`meal`);
    meal3.innerHTML=`
            <p class="mealTitle">Elevenses</p>
            <p class="mealPairing">paired with types of tea or coffee</p>
            <ul class="mealList">
                <li class="mealItem">Lavender and lemon muffins</li>
                <li class="mealItem">Caraway seed cake</li>
            </ul>`

    const meal4 = document.createElement(`div`);
    meal4.setAttribute(`class`,`meal`);
    meal4.innerHTML=`
            <p class="mealTitle">Luncheon</p>
            <p class="mealPairing">paired with bread and wine or ale</p>
            <ul class="mealList">
                <li class="mealItem">Shepherd’s pie</li>
                <li class="mealItem">Roast mutton</li>
            </ul>`

    const meal5 = document.createElement(`div`);
    meal5.setAttribute(`class`,`meal`);
    meal5.innerHTML=`
            <p class="mealTitle">Afternoon Tea</p>
            <p class="mealPairing">paired with types of tea or coffee</p>
            <ul class="mealList">
                <li class="mealItem">Apple pie and cream</li>
                <li class="mealItem">Mixed berry cobbler</li>
            </ul>`

    const meal6 = document.createElement(`div`);
    meal6.setAttribute(`class`,`meal`);
    meal6.innerHTML=`
            <p class="mealTitle">Dinner</p>
            <p class="mealPairing">Paired with assortments of bread, cheese, and malty dark beer</p>
            <ul class="mealList">
                <li class="mealItem">Spiced beef and roasted vegetables</li>
                <li class="mealItem">Chicken pies with wine and mushrooms</li>
            </ul>`

    const meal7 = document.createElement(`div`);
    meal7.setAttribute(`class`,`meal`);
    meal7.innerHTML=`
            <p class="mealTitle">Supper</p>
            <p class="mealPairing">Paired with meats, bread, cheeses, and ale</p>
            <ul class="mealList">
                <li class="mealItem">Pork pie</li>
                <li class="mealItem">Mushroom soup served with fresh herbs and hard-boiled eggs</li>
            </ul>`

    textBox.appendChild(meal1);
    textBox.appendChild(meal2);
    textBox.appendChild(meal3);
    textBox.appendChild(meal4);
    textBox.appendChild(meal5);
    textBox.appendChild(meal6);
    textBox.appendChild(meal7);

    const imgBox = document.createElement(`div`);
    imgBox.setAttribute(`class`,`menuImg`);

    const menuImg = document.createElement(`img`);
    menuImg.src = "../images/Menu-Page.jpg";
    

    const brImg = document.createElement(`img`);
    brImg.src = "../images/firstBr.jpg";

    const sbrImg = document.createElement(`img`);
    sbrImg.src = "../images/secondBr.jpg";    

    const supper = document.createElement(`img`);
    supper.src = "../images/supper.jpg";

    imgBox.appendChild(menuImg);
    imgBox.appendChild(brImg);
    imgBox.appendChild(sbrImg);
    imgBox.appendChild(supper);
    menuDiv.appendChild(textBox);
    menuDiv.appendChild(imgBox);

    content.appendChild(menuDiv);
}

export {menu}