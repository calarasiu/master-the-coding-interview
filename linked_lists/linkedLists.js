//  10 -> 5 -> 9
// LinkedList = {
//   head:{
//     value:10,
//     next{
//       value:5,
//       next:{
//         value:9,
//         next:null
//       }
//     }
//   }
// }
class Node{
  constructor(value){
    this.value= value;
    this.next = null;
    this.previous=null;
  }
};

class LinkedLists{
  constructor(value){
    this.head = {
      value: value,
      next:null,
      previous:null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value){
    const appendNode = new Node(value);
    appendNode.previous = this.tail;
    this.tail.next = appendNode;
    this.tail = appendNode;
    this.length+=1;
    return this;
  }

  prepend(value){
    const prependNode = new Node(value);
    this.head.previous = prependNode;
    prependNode.next = this.head;
    this.head = prependNode;
    this.length+=1;
    return this;
  }

  printList(){
    const array = [];
    let currentNode = this.head;
    while(currentNode != null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  // *  -  *   => *       *  => *       *   =>  * - * - * 
  //                \            \   /
  //                 *             *

  insert(index, value){
    if(index >= this.printList().length-1){
      this.append(value);
      console.log("appended the value", this.printList.length)
    }else if(index <= 0){
      this.prepend(value);
    }else{
      const insertNode = new Node(value);
      const previousNode = this.traverseToIndex(index-1);
      let holdingPointer = previousNode.next;
      holdingPointer.previous = insertNode;
      previousNode.next = insertNode;
      insertNode.next = holdingPointer;
      insertNode.previous = previousNode;
      this.length++;
    }
    return this.printList();
  }

  remove(index){
    if(index === 0){
      const deleteHead = this.traverseToIndex(index);
      this.head = deleteHead.next;
      deleteHead.remove;
    }else if(index === this.printList().length-1){
      const tailToBe = this.traverseToIndex(index-1);
      tailToBe.next=null;
      this.tail = tailToBe;
    }else{
      const previousNode = this.traverseToIndex(index-1);
      const holdingPointer = (previousNode.next).next;
      previousNode.next.remove;
      holdingPointer.previous = previousNode;
      previousNode.next = holdingPointer;
    }
    this.length--;
    return this.printList();
  }
  reverse(){
    if(!this.head.next){
      return this.head;
    }
    let first= this.head;
    this.tail = this.head;
    let second = first.next;
    let iteration = 0;
    while(second){
      console.log("iteraion", iteration++);
      const temp = second.next;
      console.log("temp", temp);
      second.next = first;
      console.log("second.next", second.next);
      first=second;
      console.log("first", first);
      second = temp;
      console.log("second", second);
    }
    this.head.next = null;
    console.log(this.head);
    this.head = first;
  }
  traverseToIndex(index){
    let counter = 0;
    let currentNode = this.head;
    while(index != counter){
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

const myLinkedList = new LinkedLists(10);
myLinkedList.append(5);
myLinkedList.prepend(1);

myLinkedList.insert(1, 77);
// console.log("before removing",myLinkedList.printList());
// myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());