function moralCheck() {
    var diceRollOne = rollD6();
    var diceRollTwo = rollD6();
    var unique = getRandomArbitrary(1, 100);
    var total = diceRollOne + diceRollTwo;
    byId('dice-rolled').innerHTML = `${diceRollOne}, ${diceRollTwo}: Total: ${total} Unique: ${unique}`;
    if (total === 12) {
        var fubarRoll = rollD6();
        var fubarType = "";
        var fubarDescription = "";
        if (fubarRoll <= 2) {
            fubarType = "Friendly Fire";
            fubarDescription = "The unit does not move and opens fire against a friendly unit, mistaking it for enemy. Place a fire order by the unit. The opposing player chooses the target. The target must have an enemy unit within 12 inches, as proximity to the enemy is precisely what has caused teh friendly fire. If no such target is available the unit does not fire and simply goes down. "
        } else {
            fubarType = "Panic!"
            fubarDescription = "The unis executes a run order and must move as fast as possible away from the closest visible enemy unit. If no enemies are visible, the unit simply goes down.";
        }
        byId('fubar').innerHTML = `FUBAR: ${fubarRoll} ${fubarType}`;
        byId('fubar-description').innerHTML = fubarDescription;
    } else {
        byId('fubar').innerHTML = "";
        byId('fubar-description').innerHTML = "";
    }
}
