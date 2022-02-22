// DOM Elements
const resultEl = document.querySelector("#result"),
    lengthEl = document.querySelector("#length")
    uppercaseEl = document.querySelector("#uppercase")
    lowercaseEl = document.querySelector("#lowercase")
    numbersEl = document.querySelector("#numbers")
    symbolsEl = document.querySelector("#symbols")
    generateEl = document.querySelector("#generate")
    clipboardEl = document.querySelector("#clipboard")

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};
// Generate Event Listener
generateEl.addEventListener("click", () => {
    const length = +lengthEl.value;      //"+" it changes value from string to number
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
})
// Generate password func
function generatePassword(lower, upper, number, symbol, length) {
    // Init pw var
    // Filter out unchecked 
    // Loop over length n call generator function for each type
    // add final pw to the pw var and return

    let generatedPassword = "";

    const typesCount = lower + upper + number + symbol;

    console.log(typesCount);

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])

    console.log(typesArr);

}

// Generator Functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,."
    return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomSymbol());