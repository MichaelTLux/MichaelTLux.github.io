function attack() {
    var numberOfShots = document.getElementById('number-of-shots').value;
    var hittingOn = document.getElementById('hitting-on').value;
    var killingOn = document.getElementById('killing-on').value;

    var allShots = rollAllAndReport(numberOfShots, 'shot-dice-rolled');
    var allHits = metThresholdAndReport(allShots, hittingOn, 'shots-hit', "Number Of Hits:");
    var allKillAttempts = rollAllAndReport(allHits, 'kill-rolls');
    var allKills = metThresholdAndReport(allKillAttempts, killingOn, 'kill-hits', "Number Of kills:");
    var numberOfNCOAttempts = metThresholdAndReport(allKillAttempts, 6);
    var NCOAttempts = rollAllAndReport(numberOfNCOAttempts, 'nco-attempt');
    var numberOfDeadNco = metThresholdAndReport(NCOAttempts, 6, 'dead-nco', 'How Many Dead NCOs:');
}

function metThresholdAndReport(allAttempts, threshold, modifyId, message) {
    var passes = 0;
    allAttempts.forEach(attempt => {
        if (attempt >= threshold) {
            passes++
        }
    });
    if (modifyId) {
        document.getElementById(modifyId).innerHTML = message + " " + passes;
    }
    return passes;
}

function rollAllAndReport(totalChances, elementToModifyId) {
    var allRollsString = "";
    var allRolls = [];


    for (var i = 0; i < totalChances; i++) {
        var roll = rollD6();
        allRolls = allRolls.concat(roll);
        if (i == 0) {
            allRollsString += "" + roll;
        } else {
            allRollsString += ", " + roll;
        }
    }
    if (elementToModifyId) {
        document.getElementById(elementToModifyId).innerHTML = allRollsString;
    }
    return allRolls;
}
