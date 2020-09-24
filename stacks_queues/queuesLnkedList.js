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
      // newNode <- last node
      // make the last item point to the new node
      this.last.next = newNode;
      // declare the new node as the last node
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue{
    if(!this.first){
      return null
    }else if(this.first === this.last){
      this.last = null;
    } else{
      this.first = this.first.next;
    }
    this.length--;
    return this;
  }
}