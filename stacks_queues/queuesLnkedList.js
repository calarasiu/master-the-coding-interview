class Node{
  constructor(value){
    this.value = value;
    this.next = null
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek(){
    // return this.last;
    return this.first;
  }

  enqueue(value){
    const newNode = new Node(value);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }else{
      const holdingPointer = this.last;
      this.last = newNode;
      this.last.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  dequeue{
    if(!this.first){
      return null
    }else{

    }
  }
}