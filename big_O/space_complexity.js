function boo(n){
  n.forEach(element => {
    console.log("boo");
  });
}

boo([1,2,3,4,5]); // space complexity = O(1) - because we take into account just the space allocated to the function

function hi(n){
  let hiArray = [];
  for(let i = 0; i<n;i++){
    hiArray[i] = "hi";
  };
  return hiArray;
}

console.log(hi(6)); // space complexity = O(n) - because we are storing the string in the array n times


// compare the tweets time

const arrayTweet = [
  {
    tweet: "hi",
    date: 2012
  },
  {
    tweet: "hello",
    date: 2014
  },
  {
    tweet: "amazing",
    date: 2018
  }
];

// if we want to compare the times of this tweets the time complexity will be O(n^2) - each one will be compared with all the other ones - nested array
