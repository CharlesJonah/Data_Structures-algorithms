function Node(val) {
  this.val = val;
  this.next = null;
}

class SinglyLinkedList {
  constructor (val) {
    this.head = null;
    this.tail = null;
    this.numOfNodes = 0;
  }

  add(val) {
    const node = new Node(data);

    if(!this.head) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.numOfNodes++;
  }

  remove(val) {
    let prev;
    let current = this.head;

    while(current) {
      if(current.val === val) {
        if(current === this.head) {
          this.head = this.head.next;
        }
        if(current === this.tail) {
          this.tail = prev;
        }
        prev.next = current.next;
        this.numOfNodes--;
      } else {
        prev = current;
      }
      current = current.next;
    }
    return this.head;
  }

  insertAfter(data, toNodeVal) {

  }

  traverse() {

  }

  length() {

  }

  reverse() {

  }

  print() {

  }


}
