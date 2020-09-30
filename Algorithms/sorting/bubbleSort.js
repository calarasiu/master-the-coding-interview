const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  
  for(let i = 0; i<array.length; i++){
    for (let j=0; j<array.length; j++){
      if(array[j] > array[j+1]){
        console.log("the 2 numbers will be sorted", array[j], array[j+1]);
        let temp = array[j];
        array[j]= array[j+1];
        array[j+1]= temp;
        console.log("the 2 numbers have been sorted",  array[j], array[j+1]);
      }
    }
  } 
  return array;
  
}


bubbleSort(numbers);
console.log(numbers);