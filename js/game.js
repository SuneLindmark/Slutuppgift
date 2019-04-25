console.log("Hello World!");

let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");
let powerUpsDiv = document.getElementById("powerUps");

let bank = 0;
let pupCost = 25;
let pupCost2 = 45;
let pupCost3 = 100;
let pupCost4 = 30;
let gainedClicks = 1;
let powerval = 0;

gameButton.addEventListener('click', function() {
    bank += gainedClicks;
    gameButton.textContent = Math.floor(bank);

});

let powerUp = document.createElement("button");
powerUp.textContent = "Mushroom " + pupCost;
powerUp.addEventListener('click', function() {
    if (bank >= pupCost) {
        bank = bank - pupCost;
        pupCost = pupCost * 2.5;
        gainedClicks = gainedClicks * 1.25;
        gameButton.textContent = Math.floor(bank);
        powerUp.textContent = "Mushroom " + Math.floor(pupCost);
        bankElement.textContent = "You Bought a Mushroom";
    } else {
        bankElement.textContent = "You don't have enough coins!"
    }
});

powerUpsDiv.appendChild(powerUp);

let powerUp2 = document.getElementById("Button1");
powerUp2.textContent = "1-UP Mushroom " + pupCost2;
powerUp2.addEventListener('click', function() {
    if (bank >= pupCost2) {
        bank = bank - pupCost2;
        pupCost2 = pupCost2 * 3.5;
        gainedClicks = gainedClicks * 1.50;
        gameButton.textContent = Math.floor(bank);
        powerUp2.textContent = "1-UP Mushroom " + Math.floor(pupCost2);
        bankElement.textContent = "You Bought a 1-UP Mushroom";
    } else {
        bankElement.textContent = "You don't have enough coins!"
    }
});

powerUpsDiv.appendChild(powerUp2);

let powerUp3 = document.getElementById("Button2");
powerUp3.textContent = "Golden Mushroom " + pupCost3;
powerUp3.addEventListener('click', function() {
    if (bank >= pupCost3) {
        bank = bank - pupCost3;
        pupCost3 = pupCost3 * 3.5;
        powerval += 0.6;
        gameButton.textContent = bank;
        powerUp3.textContent = "Golden Mushroom " + Math.floor(pupCost3);
        bankElement.textContent = "You Bought a Golden Mushroom";
    } else {
        bankElement.textContent = "You don't have enough coins!"
    }
});

powerUpsDiv.appendChild(powerUp3);

let powerUp4 = document.getElementById("Button3");
powerUp4.textContent = "Fire Flower " + pupCost4;
powerUp4.addEventListener('click', function() {
    if (bank >= pupCost4) {
        bank = bank - pupCost4;
        pupCost4 = pupCost4 * 2.5;
        powerval += 0.06;
        gameButton.textContent = bank;
        powerUp4.textContent = "Fire Flower " + Math.floor(pupCost4);
        bankElement.textContent = "You Bought a Fire Flower";
    } else {
        bankElement.textContent = "You don't have enough coins!"
    }
});

function step() {
    bank += powerval;
    gameButton.textContent = Math.floor(bank);
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

powerUpsDiv.appendChild(powerUp4);

