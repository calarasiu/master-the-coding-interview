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
    const appendNode = {value: value,
      next: null};
    this.tail.next = appendNode;
    this.tail = appendNode;
    this.length+=1;
    return this;
  }

  prepend(value){
    const prependNode = {value: value,
                      next:this.head};
    this.head = prependNode;
    this.length+=1;
    return this;
  }
}

const myLinkedList = new LinkedLists(10);
myLinkedList.append(5);
myLinkedList.prepend(1);
console.log(myLinkedList);