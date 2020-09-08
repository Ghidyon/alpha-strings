const sentence = "gHIDyon WriTIng And ScriPtiNg In THe eYe blOCK Of tHE CiVIc ceNtER";
let reversedCase = "";

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
console.log(caseArray);





