const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');

function findNemo(array){
  let t0 = performance.now();
  for(i=0; i<array.length;i++){
    if(array[i] === 'nemo'){
      console.log('Found Nemo!');
    }
  }
  let t1 = performance.now();
  console.log('Found Nemo in '+ (t1-t0) +'milliseconds');

  // the problem with measuring the performance is that the input is not the only variable that influences it - the CPU of the computer matters as well, what else is running in the mean time etc

  // the big O notation measures only the growth of the operations related to the growth of the input
  // this function has a linear time growth - O(n) - n is the number of elements - for each element there will be another operation that will run 
}

findNemo(large);

