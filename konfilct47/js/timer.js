var timeInput = document.getElementById('remaining-time');
var originalTimePerTurn = timeInput.value;
var timePerTurn = timeInput.value;
var timeRemaining = -1;
var runId = 0;

async function startTimer() {
    timeInput = document.getElementById('remaining-time');
    runId++
    var startId = runId;
    var timePerTurn;
    if (timeRemaining >= 0) {
        console.log("time remaining")
        timePerTurn = originalTimePerTurn;
    } else {
        timePerTurn = timeInput.value;
        originalTimePerTurn = timeInput.value;
    }

    timeRemaining = timePerTurn;

    timeInput.disabled = true;

    while (timeRemaining >= 0 && runId === startId) {
        if (shouldSpeak && timePerTurn - timeRemaining > 5) {
            handleSpeach(timeRemaining);
        }
        document.getElementById('remaining-time').value = timeRemaining;
        await sleep(1000);
        timeRemaining--
    }
    if (runId != startId) {
        timeRemaining++;
    }
    timeInput.disabled = false;
    document.getElementById('remaining-time').value = timePerTurn;
}

async function stopTimer() {
    timeRemaining = -1;
    await sleep(1000);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function handleSpeach(time) {
    var speachString = "";
    if (time === 0) {
        speachString = "time is up";
    } else if (time >= 1 && time <= 10) {
        speachString = "" + time;
    } else if (time % 15 === 0) {
        var seconds = time % 60;
        var minutes = (time - seconds) / 60;
        speachString = "There is ";
        if (minutes) {
            speachString += `${minutes} minutes `
        }
        if (minutes && seconds) {
            speachString += "and "
        }
        if (seconds) {
            speachString += `${seconds} seconds `
        }
        speachString += "remaining";
    }
    if (speachString) {
        responsiveVoice.speak(speachString);
    }
}
