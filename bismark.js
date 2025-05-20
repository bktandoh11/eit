let print = console.log;
/*Question 1 */
function findLargest(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const numbers = [4, 2, 9, 6, 5];
print(findLargest(numbers)); 


/*Question 2 */
/*function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
print(reversedArray); */


/*Question 3 */
/*function combineArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = combineArrays(array1, array2);
print(combinedArray); */