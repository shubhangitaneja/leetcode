/**
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
 *  Symbol       Value
 *   I             1
 *   V             5
 *   X             10
 *   L             50
 *   C             100
 *   D             500
 *   M             1000
 * For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII,
 * which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
 * Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII.
 * Instead, the number four is written as IV. Because the one is before the five we subtract it making four.
 * The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
 * - I can be placed before V (5) and X (10) to make 4 and 9. 
 * - X can be placed before L (50) and C (100) to make 40 and 90. 
 * - C can be placed before D (500) and M (1000) to make 400 and 900.
 * Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
 *
 * @param {string} s The roman numeral to convert.
 * @return {number} The converted integer number.
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