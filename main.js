const sentence = "gHIDyon WriTIng And ScriPtiNg In THe eYe blOCK Of tHE CiVIc ceNtER";
let reversedCase = "";
const wordUpperCase = [];
const ingSuffix = [];
const palindromeList = [];

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
const arrLength = caseArray.length;

const wordUpperCased = (array) => {
    for (let i = 0; i < arrLength; i++) {
        let firstLetter = array[i].charAt(0);

        if (firstLetter === firstLetter.toUpperCase()) {
            wordUpperCase.push(array[i]);
        }
    }

    return wordUpperCase;
}

const wordswithIngSuffix = (array) => {
    for (let i = 0; i < arrLength; i++) {
        let matchIng = array[i].match(/ing/gi);

        if (matchIng == "iNG") {
            ingSuffix.push(array[1]);
        }
        else if (matchIng == "InG") {
            ingSuffix.push(array[3]);
        }
    }

    return ingSuffix;
}

const palindromeChecker = (array) => {
    for (let i = 0; i < arrLength; i++) {
        let caseArrayElement = array[i].toLowerCase();
        let reversedElement = caseArrayElement.split("").reverse("").join("");

        if (caseArrayElement === reversedElement) {
            palindromeList.push(caseArrayElement);
        }
    }

    return palindromeList;
}

const sentenceObjectItems = () => {
    const sentenceArrayObject = {
        uppercased: wordUpperCased(caseArray),
        ing: wordswithIngSuffix(caseArray),
        palindrome: palindromeChecker(caseArray)
    }

    console.log(sentenceArrayObject);
}

sentenceObjectItems();