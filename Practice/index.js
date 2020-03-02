// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz



// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false



// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9



// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'



// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// array.map((요소, 인덱스, 배열) => { return 요소 });
const arr = [1, 2, 3, 4];

const arr2 = arr.map((elem, index, arr) => {
   return elem + 1;
});


console.log(arr2);