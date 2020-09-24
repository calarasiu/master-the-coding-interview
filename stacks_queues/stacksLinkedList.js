class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.bottom=null;
    this.length = 0;
  }

  peek(){
    return this.top;
  }

  push(value){
    let newNode = new Node(value);
    if (this.length === 0){
      this.top = newNode;
      this.bottom = newNode;
    }else{
      // newNode -> topNode
      let holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
  }
  pop(){
    if(!this.top){
      return null;
    }else if(this.top === this.bottom){
      this.top = null;
    }else{
      // let holdingPointer = this.top;
       this.top = this.top.next;
      this.length--;
      return this;
      
    }
  }
}

const myStack = new Stack();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
console.log("before pop",myStack.peek());
myStack.pop();
console.log("after pop", myStack.peek());
