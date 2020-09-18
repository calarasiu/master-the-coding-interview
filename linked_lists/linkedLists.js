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
  }
};

class LinkedLists{
  constructor(value){
    this.head = {
      value: value,
      next:null
    }
    this.tail = this.head;
    this.length = 1;
  }
  append(value){
    const appendNode = new Node(value);
    this.tail.next = appendNode;
    this.tail = appendNode;
    this.length+=1;
    return this;
  }

  prepend(value){
    const prependNode = new Node(value);
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
  //                \             \   /
  //                  *             *

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
      previousNode.next = insertNode;
      insertNode.next = holdingPointer;
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
      previousNode.next = holdingPointer;
    }
    this.length--;
    return this.printList();
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
console.log("before removing",myLinkedList.printList());
myLinkedList.remove(3);
console.log(myLinkedList.printList());