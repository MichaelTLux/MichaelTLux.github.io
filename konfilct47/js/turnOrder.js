var units = [];
var allNames = [];

function pick(array) {
    var whatToRemove = getRandomArbitrary(0, units.length);
    var item = units.splice(whatToRemove, 1)[0];
    updateTurns();
    document.getElementById('current-turn').value = item;

    if (item && shouldSpeak) {
        responsiveVoice.speak(item);
    }
    startTimer();
    return item;
}

function getAllUnits() {
    var array = [];
    allNames = getAllNames();

    allNames.forEach(name => {
        var unitCount = document.getElementById(name).value;
        var unitsArray = generateUnitsArray(name, unitCount);
        array = array.concat(unitsArray);
    })

    units = array;
    updateTurns();
}

function generateUnitsArray(name, numberOfUnits) {
    var array = []
    for (var i = 0; i < numberOfUnits; i++) {
        array.push(name + i);
    }
    return array;
}

function removeByName(name) {
    var regularExpression = new RegExp(name);
    removeName(regularExpression, units);
}

function removeName(regularExpression, array) {
    for (var i = 0; i < array.length; i++) {
        if (regularExpression.test(array[i])) {
            var item = array.splice(i, 1)[0];
            updateTurns();
            return item;
        }
    }
    return "FAILURE";
}

function updateTurns() {
    allNames.forEach(name => {
        document.getElementById(`${name}-turns`).value = getTurnForName(name);
    });
}

function getTurnForName(name) {
    var regularExpression = new RegExp(name);
    return getTurns(regularExpression, units);
}

function getTurns(regularExpression, units) {
    var total = 0;
    for (var i = 0; i < units.length; i++) {
        if (regularExpression.test(units[i])) {
            total++;
        }
    }
    return total;
}

function addTurnForName(name) {
    units = units.concat(generateUnitsArray(name, 1));
    updateTurns();
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function getAllNames() {
    return document.getElementById('all-names').value.split(',');
}
