class Item {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.length = 0;
  }

  getUnderlyingList() {
    let list = null;
    let counter = 0;
    for (let key in this.items) {
      list = { value: this.items[key], next: list };
    }
    return list;
  }

  enqueue(value) {
    this.items[this.tail] = value;
    this.tail += 1;
  }

  dequeue() {
    const ITEM = this.items[this.head];
    delete this.items[this.head];
    this.head += 1;
    return ITEM;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(8);
queue.enqueue(7);

console.log(queue.getUnderlyingList());
