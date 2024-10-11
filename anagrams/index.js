// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    let string1 =stringA.toLowerCase().split("").sort().join("");
    let string2 =stringB.toLowerCase().split("").sort().join("");
    let isTrue = false;
    console.log(string2);
    console.log(string1);
    if (string1==string2) {
        isTrue=true;
    }
    return isTrue     
}

module.exports = anagrams;
