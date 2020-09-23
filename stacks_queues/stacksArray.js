class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.array = [];
  }

  peek(){
    return this.array[this.array.length-1];
  }

  push(value){
    this.array.push(value);
    return this;
  }

  pop(){
    this.array.pop();
    return this;
  }
}

const myStack = new Stack;

myStack.push(7);
console.log(myStack);
myStack.peek();
console.log(myStack);
myStack.pop();
console.log(myStack);