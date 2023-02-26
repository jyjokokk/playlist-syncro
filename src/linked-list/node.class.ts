export class LinkedNode {
  constructor(public dataValue: unknown, public next?: LinkedNode) {
    if (next) {
      this.next = next;
    }
  }
}

const n = new LinkedNode('lol');
const n1 = new LinkedNode('kek', n);
console.log(n);
console.log(n1);
