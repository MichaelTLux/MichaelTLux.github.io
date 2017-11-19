var unitCountDiv = document.getElementById('unit-counts');
var remainingTurnsDiv = document.getElementById('remaining-turns');
var addTurnsDiv = document.getElementById('add-turns');
var removeTurnsDiv = document.getElementById('remove-turns');

function generateGame() {
    var namesNode = document.getElementById('all-names');
    var namesText = namesNode.value;
    var allNames = namesText.split(',');
    allNames.forEach(name => {
        return name.trim();
    });
    generateUnitInputs(allNames);
    generateTurnsRemaining(allNames);
    generateAddTurnsButtons(allNames);
    generateRemoveTurnsButtons(allNames);
    // namesNode.disabled = true;
}

function generateUnitInputs(array) {
    var newHtml = "<p><b>Unit Counts</b></p>";
    array.forEach(name => {
        newHtml +=
            `<div><p> ${name} </p> <input id = "${name}" type = "text" value = "0"/></div>`;
    });
    newHtml += `<div><button onclick="getAllUnits()">New Turn</button></div>`
    unitCountDiv.innerHTML = newHtml;
}

function generateTurnsRemaining(array) {
    var newHtml = "<p><b>Turns Remaining</b></p>"
    array.forEach(name => {
        newHtml +=
            `<div><Label for="${name}-turns">${name} turns Left: </label><input name="${name}-turns" id="${name}-turns" type="text" value="0" disabled="true" /></div>`;
    });
    remainingTurnsDiv.innerHTML = newHtml;
}

function generateAddTurnsButtons(array) {
    var newHtml = "";
    array.forEach(name => {
        newHtml +=
            `<button onclick="addTurnForName('${name}')">${name}</button>`;
    });
    addTurnsDiv.innerHTML = newHtml;
}

function generateRemoveTurnsButtons(array) {
    var newHtml = "";
    array.forEach(name => {
        newHtml +=
            `<button onclick="removeByName('${name}')">${name}</button>`;
    });
    removeTurnsDiv.innerHTML = newHtml;
}
