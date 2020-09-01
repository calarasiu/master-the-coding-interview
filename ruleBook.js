// 1 - Worst case
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];

function findNemo(arr){
  arr.forEach(element => {
    if(element === 'nemo'){
      console.log('Found Nemo');
      break; // - once the condition is met, it will break out of the loop - make the code more efficient 
    }
  });
}

// even though the 'nemo' element can be the 1st element and the code will run just 1 time - the big O will always consider the worst case - 'nemo' element on the last spot - the Big O = O(n)

// 2 Remove constants 
 function compressBoxes(input){
  for(var i = 0; i<=100; i++){
    console.log('hi');            // O(100)
  }

   input.forEach(function(box){
     console.log(box);            // O(n)
   })

   input.forEach(function(box){
     console.log(box);              //O(n)
   })
 }

 Big O = O(100 + 2n) = O(n) - because the 100 and 2 will became insignificant when the input will exponentially grow 


//  3 - different terms for inputs
const box1 = new Array(100).fill('book');
const box2 = new Array(5).fill('book');

function readBooks(box1, box2){
  box1.forEach(function(book){    // O(a)
    console.log(book);
  });

  box2.forEach(function(book){
    console.log(book);            // O(b)
  });
}

Big O = (a + b); 


O(n^2)

const boxes = [1,2,3,4];

function couples(boxes){
  arr.forEach(function(box1){
    arr.forEach(function(box2){
      console.log(box1, box2);
    })
  })
}

Big O = n^2 because the array is nested - for each iteration it will iterate through the array again 

Rule of thumb - iterations with the same identation - (a+b)
              - iterations that are nested - (a*b)

// 4- drop non dominants 

const boxes = [1,2,3,4];

function couples(boxes){
  arr.forEach(function(number){
    console.log(number);            // O(n)
  })

  arr.forEach(function(number1){
    arr.forEach(function(number2){
      console.log(number1 + number2);   // O(n^2)
    })
  })
}

Big O = (n + n^2) if the input will grow really big, the most significant growth will be noticed by n^2 => Big O = (n^2)

// never nest 3 levels O(n^3), as the algorithmic efficiency will be really bad and for sure is a better solution 