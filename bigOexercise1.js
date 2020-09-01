function funChallenge(input){
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  input.forEach(element => { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  });
  // what's inside the for loop it will run for each element of the input - that means it has a time of execution of O(n)
  return a; // O(1)
}

Big O(3 + 4n) = O(n) // because we are trying to take into account just the variations caused by the size of the input not the constants 

