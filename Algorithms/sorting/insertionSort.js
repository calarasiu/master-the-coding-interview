const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// other solution https://repl.it/@aneagoie/insertionSort#main.js
function insertionSort(array) {
  for(let i = 0; i<array.length; i++){
    // let j = i;
    if(array[i]>array[i+1]){
      let temp = array[i+1];
      array[i+1] = array[i];
      array[i] = temp;
      
      while(array[i] < array[i-1]){
        let temp = array[i];
        array[i] = array[i-1];
        array[i-1] = temp;
        i--;
      }

    }
    
  }
  return array;
}

insertionSort(numbers);
console.log(numbers);