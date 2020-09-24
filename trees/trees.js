class Node{
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  insert(value){
    const newNode = new Node(value);
    let currentNode = this.root;
    if(currentNode === null){
      this.root = newNode;
    }
    while(true){
      if(newNode.value < currentNode.value){
        
        if(!currentNode.left){
          currentNode.left = newNode;
          return this;
        }
          currentNode = currentNode.left;
        
      } else{
        if(!currentNode.right){
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  lookup(value){
    if(!this.root){
      return null;
    }
    let currentNode = this.root;
    while(currentNode){             //if we exhausted the nodes to check 
      if(currentNode.value = value){
        return currentNode;
      }else if(currentNode.value<value){
        currentNode = currentNode.right;
      }else{
        currentNode = currentNode.left;
      }
    }
    return false;
  }
}