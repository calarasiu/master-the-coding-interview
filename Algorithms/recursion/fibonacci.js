function fibonacciIterative(n){   //O(n)
  const results = [];
  while(results.length<=n){
    if(results.length === 0){
      console.log("first if")
      results.push(0);
    }else if(results.length ===1){
      console.log("2 if")
      results.push(1);
    }else{
      console.log("3 if")
      last = results[results.length-1];
      lastButOne = results[results.length-2];
      results.push(last+lastButOne);
    }
  }
  return results[results.length-1];
}

// console.log(fibonacciIterative(8));

function fibRecursive(n){     //O(2^n - exponential time)
  debugger
      if(n<2){
      return 1;
      }
      
  return fibRecursive(n-1) + fibRecursive(n-2);
  }
  console.log(fibRecursive(3));
