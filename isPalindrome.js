// // Write your code below

let arr1 = [];
let arr2 = [];

function isPalindrome(word) {
  for (let i = 0; i < word.length; i++) {
    arr1.push(word[i]);
    arr2.push(word[i]);
  }
  console.log(arr1);
  arr2 = arr2.reverse();
  console.log(arr2);
  if (arr1.toString() === arr2.toString()) {
    console.log(arr1, arr2, true);
  } else {
    console.log(false);
  }
}

// function isPalindrome(word) {
//   let j = word.length - 1;
//   for (let i = 0; i < (word.length - 1) / 2; i++) {
//     if (word[i] !== word[j]) {
//       return false;
//     }
//     j--;
//   }
//   return true;
// }

isPalindrome("doof");
