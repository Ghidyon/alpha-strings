const sentence = "gHIDyon WriTIng And ScriPtiNg In THe eYe blOCK Of tHE CiVIc ceNtER";
let reversedCase = "";
let wordUpperCase = [];

const convertCase = (string) => {
    for (let i = 0; i < string.length; i++) {
        let character = string.charAt(i);

        if (character === character.toLowerCase()) {
            character = character.toUpperCase();
        }
        else {
            character = character.toLowerCase();
        }

        reversedCase += character;
    }
}

convertCase(sentence);

const caseArray = reversedCase.split(" ");

for (let i = 0; i < caseArray.length; i++) {
    let firstLetter = caseArray[i].charAt(0);

    if (firstLetter === firstLetter.toUpperCase()) {
        wordUpperCase.push(caseArray[i]);
    }
}

console.log(sentence);
console.log(reversedCase);
console.log(wordUpperCase);




