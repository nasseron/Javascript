function rollDice() {
    return Math.floor(Math.random() * 6 ) + 1;
}
let rolls = [];
while (true) {
    let result = rollDice();
    rolls.push(result);
    if (result === 6) {
        break;
    }
}
let ul = document.createElement('ul')
for (let roll of rolls) {
    let li = document.createElement('LI');
    LI.TEXTCONTENT = ROLL;
    ul.appendChild(li);

}
document.getElementById('results').appendChild(ul);
