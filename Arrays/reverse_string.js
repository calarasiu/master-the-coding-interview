function reverse(stringToReverse){
  // first of all we need to check the input
  if(stringToReverse.length <2 || typeOf(stringToReverse) !=="string" || !stringToReverse){
    return "Your input is not accepted - is either to short, is not a string or is undefined";
  }
    let arrayToReverse = stringToReverse.split("");
    first = 0;
    last = arrayToReverse.length-1;
    while(first<last){
      let temp = arrayToReverse[first];
      arrayToReverse[first] = arrayToReverse[last];
      arrayToReverse[last] = temp;
      first++;
      last--;
    }
  return arrayToReverse.join("");
}

function reverse2(input){
 return input.split("").reverse().join("");

}
// E6 JS 
const reverse3 = input => [...input].reverse().join("");
// [...input] - spread function
console.log(reverse3("mama"));

function mergeArrays(arr1, arr2){
  arrays = arr1.concat(arr2);
  return arrays.sort();
}
console.log(mergeArrays([2,3,5,], [1,9,4]));