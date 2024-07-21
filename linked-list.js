/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
    this.tail.next = newNode;
    this.tail = newNode;
    }
    this.length +=1
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    }else{
    newNode.next = this.head;
    this.head = newNode;
    }
    this.length +=1;
  }

  /** pop(): return & remove last item. */

  pop() {
    try{
      if(!this.head) throw "Error: Empty list";
      let currentNode = this.head;
      const poppedNode = this.tail;

      if(currentNode === poppedNode){
        this.head = null;
        this.tail = null;
        this.length = this.length-1;
        return currentNode.val;
      }
      
      while(currentNode.next !== this.tail){
        currentNode = currentNode.next
      }
      this.tail = currentNode;
      this.tail.next = null;
      this.length = this.length-1;
      return poppedNode.val;
    }catch(e){
      console.error(e)
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    try{
      if(!this.head) throw "Error: Empty list";
      let firstNode = this.head;
      let secondNode = firstNode.next;
      if(this.head === this.tail){
        this.head = null;
        this.tail = null;
        this.length = this.length-1;
        return firstNode.val;
      }
      this.head = secondNode;
      if(this.head === this.tail){
        this.tail = secondNode;
        this.length = this.length-1;
        return firstNode.val;
      }
      this.length = this.length-1;
      firstNode = null;
      return firstNode.val;
    }catch(e){
      console.error(e);
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    try{
      if(idx>=this.length || idx<0) throw "Error: Index must be valid"
      let currentNode = this.head;
      if(!currentNode) throw "Error: Linked List must not be empty"
      
      let count=0
      while(currentNode){
        if(count===idx) return currentNode.val;
        count++;
        currentNode=currentNode.next;
      }
      }catch(e){
      console.error(e)
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    try {
      if (idx >= this.length || idx < 0) throw "Error: Index not valid";

      let currentNode = this.head;
      if (!currentNode) throw "Error: Empty list";

      let count = 0;
      while (currentNode) {
          if (count === idx) {
              currentNode.val = val;
              return;
          }
          currentNode = currentNode.next;
          count++;
      }
      throw "Error: Index not found";
  } catch (e) {
      console.error(e);
  }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    try {
      if (idx > this.length || idx < 0) throw "Error: Index not valid";

      
      if ((this.length === 0 && idx === 0) || idx === 0) {
        const newNode = new Node(val)
        this.head = newNode.next;
        this.head = newNode
        this.length = this.length+1;
        this.tail = this.head;
        return;
      }
      
      if (idx === this.length) return this.push(val);

      let currentNode = this.head;
      let count = 0;

      while (currentNode) {
          if (count === idx-1) {
              const newNode = new Node(val);
              let shiftedNode = currentNode.next;
              currentNode.next = newNode;
              newNode.next = shiftedNode;
              this.length++;
              return;
          }
          currentNode = currentNode.next;
          count = count + 1;
      }
      throw "Error: Index not found";
  } catch (e) {
      console.error(e);
  }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    try {
      if (idx >= this.length || idx < 0) throw "Error: Index not valid";

      let currentNode = this.head;
      if (!currentNode) throw "Error: Empty list";
      
      if(currentNode === this.tail && idx===0){
        let removedNode = currentNode;
        removedNode = removedNode.next;
        this.tail = null;
        this.head = null;
        this.length--;
        return currentNode.val
      }
      
      if(idx === 0){
          let removedNode = currentNode;
          currentNode = currentNode.next;
          this.head = currentNode;
          this.length--;
          return removedNode.val;
      }

      let count = 0;
      while (currentNode) {
          if (count === idx-1) {
              let removedNode = currentNode.next
              currentNode.next = removedNode.next;
              this.length --;
              return removedNode.val;
          }
          currentNode = currentNode.next;
          count++;
      }
      throw "Error: Index not found";
  } catch (e) {
      console.error(e);
      return null;
  }
  }

  /** average(): return an average of all values in the list */

  average() {
    if(!this.head) return 0;
    let numItems = 0;
    let sum = 0
    let currentNode = this.head;
    while(currentNode){
        sum = sum + currentNode.val;
        numItems++;
        currentNode = currentNode.next;
    }
    const mean = sum/numItems
    return mean;
  }
}

module.exports = LinkedList;
