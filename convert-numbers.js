/**
 * @param {string} s
 * @return {number}
 */
var romanToInt1 = function(s) {
    const specialSymbols = {'I': ['V','X'], 'X': ['L','C'], 'C': ['M', 'D']};
    const symbolValueMap = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000,
    };
    let num = 0;
    for (let i = 0; i < s.length; i++) {
        let currentSymbol = s[i];
        if (currentSymbol in specialSymbols && specialSymbols[currentSymbol].includes(s[i+1])) {
            currentSymbol += s[i+1];
            i += 1;
        }
        num += symbolValueMap[currentSymbol];
    }
    return num;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt2 = function(s) {
    const symbolValueMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let num = 0;
    let i = 0;
    while (i < s.length) {
        if (symbolValueMap[s[i]] < symbolValueMap[s[i+1]]) {
            num += symbolValueMap[s[i+1]] - symbolValueMap[s[i]];
            i += 2; // Skip next character.
        } else {
            num += symbolValueMap[s[i]];
            i += 1;
        }
    }
    return num;
};