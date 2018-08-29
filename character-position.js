var character = {};

function countLetters(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            continue;
        }
        if (!character[str[i]]) {
            character[str[i]] = [i];
        } else {
            character[str[i]].push(i);
        }
    }
    console.log(character);
}

countLetters("lighthouse in the labs");