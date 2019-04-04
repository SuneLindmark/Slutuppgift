console.log("Hello World!");

let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");
let powerUpsDiv = document.getElementById("powerUps");

let bank = 0;
let pupCost = 10;
let pupCost2 = 20;

gameButton.addEventListener('click', function() {
    bank += 1;
    gameButton.textContent = Math.floor(bank);

});

let powerUp = document.createElement("button");
powerUp.textContent = "Mushroom";
powerUp.addEventListener('click', function() {
    if (bank >= pupCost) {
        bank = bank - pupCost;
        pupCost = pupCost *3;
        bank = bank * 2;
        gameButton.textContent = bank;
        bankElement.textContent = "You Bought a Mushroom";
    } else {
        bankElement.textContent = "You don't have enough coins!"
    }
});

powerUpsDiv.appendChild(powerUp);

let powerUp2 = document.getElementById("Button1");
powerUp2.textContent = "1-UP Mushroom";
powerUp2.addEventListener('click', function() {
    if (bank >= pupCost2) {
        bank = bank - pupCost2;
        pupCost2 = pupCost2 *9;
        bank = bank * 15;
        gameButton.textContent = bank;
        bankElement.textContent = "You Bought a 1-UP Mushroom";
    } else {
        bankElement.textContent = "You don't have enough coins!"
    }
});

powerUpsDiv.appendChild(powerUp2);

let powerUp3 = document.getElementById("Button2");
powerUp3.textContent = "Golden Mushroom";
powerUp3.addEventListener('click', function() {
    if (bank >= pupCost) {
        bank = bank - pupCost;
        pupCost = pupCost *3;
        bank = bank * 2;
        gameButton.textContent = bank;
        bankElement.textContent = "You Bought a Golden Mushroom";
    } else {
        bankElement.textContent = "You don't have enough coins!"
    }
});

powerUpsDiv.appendChild(powerUp3);