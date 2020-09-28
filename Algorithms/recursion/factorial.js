// calculate the 5! 
// iterative method

function findFactorialIterative(number){
  let n = 1
  for(let i=1; i<=number;i++){
     console.log(n *= i);
    }
    return n;
}

// console.log(findFactorialIterative(2));

// recursive method

function findFactorialRecursive(number){
  if(number === 1){

    return 1;
  }

  return number * findFactorialRecursive(number-1); 
}

console.log(findFactorialRecursive(3));