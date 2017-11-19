var shouldSpeak = updateSpeaking();

function rollD6() {
    return Math.round(getRandomArbitrary(1, 6));
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function byId(id) {
    return document.getElementById(id);
}

function updateSpeaking() {
    shouldSpeak = byId('should-speak').checked;
}
