/**

Reverse Vowels of a String

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".

*/

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const final = s.split('');
    let firstVowelIndex = -1;
    let secondVowelIndex = -1;
    let i = 0;
    let j = final.length - 1;
    while (i < j) {
        if (vowels.indexOf(final[i]) > -1) {
            firstVowelIndex = i;
        } else {
            i++;
        }
        if (vowels.indexOf(final[j]) > -1) {
            secondVowelIndex = j;
        } else {
            j--;
        }
        if (firstVowelIndex > -1 && secondVowelIndex > -1) {
            const temp = final[firstVowelIndex];
            final[firstVowelIndex] = final[secondVowelIndex];
            final[secondVowelIndex] = temp;
            firstVowelIndex = -1;
            secondVowelIndex = -1;
            i++;
            j--;
        }
    }
    return final.join('');
};
